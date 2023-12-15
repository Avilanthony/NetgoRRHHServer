const { response, request } = require("express");
const DEPTOS = require("../../models/modulo_departamento/departamento");
const ViewSelectDeptos = require("../../models/modulo_seguridad/views/selec_deptos");

const seleccionarDepartamentos = async (req = request, res = response) => {
    const { id_departamento } = req.params; // Cambiar a query parameter

    try {
        const usuarios = await ViewSelectDeptos.findAll({ where: { ID_DEP: id_departamento } });
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

const getDepartamentos = async  (req = request, res = response) => {
    try {

         const departamento = await DEPTOS.findAll();
         res.json({
            ok: true,
            status: true,
            departamento
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

module.exports = {seleccionarDepartamentos, getDepartamentos};