const { request, response } = require("express");
const USERS = require("../../models/modulo_seguridad/usuario");
const {uploadFile} = require("../../utils/cloudinary");
const fs = require("fs-extra");

const updatePerfilUsuario = async (req = request, res = response) => {

    const {id_usuario} = req.params; //url

    const {telefono, correo} = req.body; //ingresar

    let imagen

    try {

        const usuario = await USERS.findByPk(id_usuario);
        
        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }
        console.log("El file de la request es: ");
        console.log(req.files);//Si hubo un reques de archivo
        if (req.files?.image) {//image = form-data en Postman
            const result = await uploadFile(req.files.image.tempFilePath)//Subiendo imagen
            console.log("El resultado es: ");
            console.log(result); //Info de imagen subida
            imagen = result.secure_url; //Obtención de la URL de Cloudinary a partir de los componentes de result
            await fs.unlink(req.files.image.tempFilePath) //Elimar el archivo de Uploads
        }
        
        await usuario.update({
            TELEFONO: telefono !== "" ? telefono : USERS.TELEFONO, 
            CORREO: correo !== "" ? correo : USERS.CORREO,
            IMAGEN: imagen !== "" ? imagen : USERS.IMAGEN
        },{
            where: {ID_USUARIO : id_usuario}
            
        })

        
        
        return res.status(200).json({
            ok: true,
            msg: "¡Usuario actualizado con éxito!",
            usuario: usuario
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {updatePerfilUsuario}