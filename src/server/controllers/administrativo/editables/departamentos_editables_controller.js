const { request, response } = require("express");
const DEPTOS = require("../../../models/modulo_departamento/departamento");
const USERS = require("../../../models/modulo_seguridad/usuario");

const deleteDepartamento = async (req = request, res = response) => {
    
    const {id_departamento} = req.params; //url

    try {
        const departamento = await DEPTOS.findByPk(id_departamento);
        
        if (!departamento) {
            console.log('Departamento no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el departamento"
            });
        }

        const {DEPARTAMENTO} = departamento;

        /* const eliminarCampo = USERS.findOne({where: {ID_DEPARTAMENTO: id_departamento}}); */

        await USERS.update({ID_DEPARTAMENTO: null}, {where: {ID_DEPARTAMENTO: id_departamento}});

        await departamento.destroy();

        return res.status(200).json({
            ok: true,
            msg: "¡Departamento eliminado con éxito!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            msg: error.message
        });
        
    }
}

const crearDepto = async (req = request, res = response) => {

    const {
        departamento = "",
        id_local
    } = req.body;

    try {

        // Crear usuario con el modelo
        DBdepartamento = await DEPTOS.build({

            DEPARTAMENTO: departamento,
            ID_LOCAL: id_local
        })

        // Crear usuario de DB
        await DBdepartamento.save();
        
        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            msg: '¡Creación de departamento exitosa!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports={deleteDepartamento, crearDepto};