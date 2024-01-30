const { request, response } = require("express");
const ViewDatosBoleta = require("../../models/modulo_boleta/views/boleta_view");


const getBoletaUsuario = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del Usuario recibido:', id_usuario);

        const usuario = await ViewDatosBoleta.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el Usuario"
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
    getBoletaUsuario };