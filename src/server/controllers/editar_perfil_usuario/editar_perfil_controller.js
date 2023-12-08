const { request, response } = require("express");
const USERS = require("../../models/modulo_seguridad/usuario");

const updatePerfilUsuario = async (req = request, res = response) => {

    const {id_usuario} = req.params; //url

    const {telefono, correo} = req.body; //ingresar

    try {

        const usuario = await USERS.findByPk(id_usuario);
        
        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        await usuario.update({
            TELEFONO: telefono !== "" ? telefono : USERS.TELEFONO, 
            CORREO: correo !== "" ? correo : USERS.CORREO
        },{
            where: {ID_USUARIO : id_usuario}
            
        })

        return res.status(200).json({
            ok: true,
            msg: "¡Usuario actualizado con éxito!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {updatePerfilUsuario}