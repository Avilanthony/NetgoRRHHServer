const USERS = require("../../models/modulo_seguridad/usuario");
const { uploadPDF, destroyPDF } = require("../../utils/cloudinary");
const fs = require("fs-extra");

const subirBoleta = async (req, res) => {
    const { id_usuario } = req.params;
    const { pdf } = req.files;

    console.log(pdf)

    try {


        const usuario = await USERS.findByPk(id_usuario);
        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        console.log(usuario);

        console.log("Antes de entrar");

        if (!((usuario.PUBLIC_ID_PDF == '' && usuario.BOLETA == '') || (usuario.PUBLIC_ID_PDF == null && usuario.BOLETA == null))) {

            console.log("Entró a los no vacíos / PDF Actualizados");
            await destroyPDF(usuario.PUBLIC_ID_PDF);
            await USERS.update({
                BOLETA: null,
                PUBLIC_ID_PDF: null
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });

            const result = await uploadPDF(pdf.tempFilePath);
            console.log(result)
            //BOLETA
            await USERS.update({
                BOLETA: result.secure_url,
                PUBLIC_ID_PDF: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });
            res.json({
                msg: 'PDF actualizado'
            })

            
            await fs.unlink(req.files.pdf.tempFilePath);

        } else {
            console.log("Entró a los vacíos / PDF Nuevos");
            const result = await uploadPDF(pdf.tempFilePath);

            console.log(result)
            //BOLETA
            await USERS.update({
                BOLETA: result.secure_url,
                PUBLIC_ID_PDF: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });
            res.json({
                msg: 'PDF subido'
            })

            await fs.unlink(req.files.pdf.tempFilePath);

        }



    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

/* const destruirBoleta = async (req, res) => {
    const { id_usuario } = req.params;

    console.log(pdf)

    try {

        const usuario = await USERS.findByPk(id_usuario);

        const result = await uploadPDF(pdf.tempFilePath);
         console.log(result)
        //BOLETA
        await USERS.update({ 
            BOLETA: result.secure_url, 
            PUBLIC_ID_PDF: result.public_id 
        }, { 
            where: { 
                ID_USUARIO: id_usuario 
            } 
        });
        res.json({
            msg: 'PDF subido'
        })
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
} */

module.exports = { subirBoleta };
