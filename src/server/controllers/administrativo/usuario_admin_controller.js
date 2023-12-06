const { request, response } = require("express");

const ViewUserAdminEdit = require("../../models/modulo_seguridad/views/usuario_admin_edit_view");


const getUsuarioEditAdmin = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del usuario recibido:', id_usuario);

        const usuario = await ViewUserAdminEdit.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        res.json({usuario});
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};


module.exports = {
    getUsuarioEditAdmin };