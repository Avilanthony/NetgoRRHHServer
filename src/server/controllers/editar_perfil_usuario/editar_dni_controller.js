
const fs = require("fs-extra");
const USERS = require("../../models/modulo_seguridad/usuario");
const { destroyDNI, uploadDNI } = require("../../utils/cloudinary");
const DNI = require("../../models/modulodni/dni");

const subirDNI = async (req, res) => {
    const { id_usuario } = req.params;
    const { image } = req.files;

    console.log(image);


    try {

        const usuario = await DNI.findByPk(id_usuario, {
            include: USERS
        });
        console.log(usuario);
        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }
        console.log(usuario.USERS);

        console.log("Antes de entrar");

        if (!((usuario.PUBLIC_ID_DNI == '' && usuario.IMAGEN == '') || (usuario.PUBLIC_ID_DNI == null && usuario.IMAGEN == null))) {

            console.log("Entró a las no vacías / DNI Actualizados");
            await destroyDNI(usuario.PUBLIC_ID_DNI);
            await DNI.update({
                IMAGEN: null,
                PUBLIC_ID_DNI: null
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });

            const result = await uploadDNI(image.tempFilePath);
            console.log(result)
            
            await DNI.update({
                IMAGEN: result.secure_url,
                PUBLIC_ID_DNI: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });

            
            await fs.unlink(req.files.image.tempFilePath);

        } else {
            console.log("Entró a las vacías / DNI Nuevas");
            const result = await uploadImage(image.tempFilePath);

            console.log(result)
            //BOLETA
            await DNI.update({
                IMAGEN: result.secure_url,
                PUBLIC_ID_DNI: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });

            await fs.unlink(req.files.img.tempFilePath);

            
            /* res.json({
                msg: 'IMG actualizada'
            }) */

        }

        
        res.json({
            msg: 'DNI actualizada'
        })


    } catch (error) {
        res.status(400).json({
            msg: error
        })

        console.log("No ha hecho el try DNI")
    }
}



module.exports = { subirDNI };
