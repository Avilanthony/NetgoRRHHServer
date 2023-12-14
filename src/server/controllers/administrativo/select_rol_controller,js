const { response, request } = require("express");
const ViewSelectRol = require("../../models/modulo_seguridad/views/select_rol");
const ROLES = require("../../models/modulo_seguridad/rol");

const seleccionarRoles = async (req = request, res = response) => {
    const { id_rol } = req.params; // Cambiar a query parameter

    try {
        const usuarios = await ViewSelectRol.findAll({ where: { ID_ROL: id_rol } });
        res.json({
            ok: true,
            status: true,
            usuario: usuarios
        });
    } catch (error) {
        console.error(error);
        return res.json({
            ok: false,
            status: false,
            msg: 'Talk to the administrator.'
        });
    }
};

const getRoles = async  (req = request, res = response) => {
    try {

         const roles = await ROLES.findAll();
         res.json({
            ok: true,
            status: true,
            roles
         })
        
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            status: false,
            msg: 'Algo anda mal, hable con el administrador.'
        });
    }
}

module.exports = {seleccionarRoles, getRoles};