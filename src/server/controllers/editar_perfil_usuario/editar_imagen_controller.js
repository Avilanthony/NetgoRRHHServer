
const fs = require("fs-extra");
const USERS = require("../../models/modulo_seguridad/usuario");
const { destroyImage, uploadImage } = require("../../utils/cloudinary");

const subirImagen = async (req, res) => {
    const { id_usuario } = req.params;
    const { image } = req.files;

    console.log(image)

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

        if (!((usuario.PUBLIC_ID_IMG == '' && usuario.IMAGEN == '') || (usuario.PUBLIC_ID_IMG == null && usuario.IMAGEN == null))) {

            console.log("Entró a las no vacías / IMG Actualizados");
            await destroyImage(usuario.PUBLIC_ID_IMG);
            await USERS.update({
                IMAGEN: null,
                PUBLIC_ID_IMG: null
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });

            const result = await uploadImage(image.tempFilePath);
            console.log(result)
            //BOLETA
            await USERS.update({
                IMAGEN: result.secure_url,
                PUBLIC_ID_IMG: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });
            res.json({
                msg: 'IMG actualizada'
            })

            
            await fs.unlink(req.files.image.tempFilePath);

        } else {
            console.log("Entró a las vacías / IMG Nuevas");
            const result = await uploadImage(image.tempFilePath);

            console.log(result)
            //BOLETA
            await USERS.update({
                IMG: result.secure_url,
                PUBLIC_ID_IMG: result.public_id
            }, {
                where: {
                    ID_USUARIO: id_usuario
                }
            });
            res.json({
                msg: 'IMG subido'
            })

            await fs.unlink(req.files.img.tempFilePath);

        }



    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

module.exports = { subirImagen };
