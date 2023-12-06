const { response, request } = require("express");
const DEPTOS = require("../../models/modulo_departamento/departamento");
const ViewSelectDeptos = require("../../models/modulo_seguridad/views/selec_deptos");

const seleccionarDepartamentos = async (req = request, res = response) => {

    const {id_usuario, id_departamento} = req.body;

    try {
        /* const departamento = await DEPTOS.findAll(); */
        const usuario = await ViewSelectDeptos.findAll({where:{ID_DEP:id_departamento}});
        res.json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            status: false,
            msg: 'Talk to the administrator.'
        });
    }


}

const getDepartamentos = async  (req = request, res = response) => {
    try {

         const departamento = await DEPTOS.findAll();
         res.json({
            departamento
         })
        
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            status: false,
            msg: 'Talk to the administrator.'
        });
    }
}

module.exports = {seleccionarDepartamentos, getDepartamentos};