const { response, request } = require("express");
const ViewSelectLocal = require("../../models/modulo_seguridad/views/select_local");
const LOCALES = require("../../models/modulo_locales/locales");

const seleccionarLocales = async (req = request, res = response) => {
    const { id_local } = req.params; // Cambiar a query parameter

    try {
        const usuarios = await ViewSelectLocal.findAll({ where: { ID_LOCAL: id_local } });
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

const getLocales = async  (req = request, res = response) => {
    try {

         const locales = await LOCALES.findAll();
         res.json({
            ok: true,
            status: true,
            locales
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

module.exports = {seleccionarLocales, getLocales};