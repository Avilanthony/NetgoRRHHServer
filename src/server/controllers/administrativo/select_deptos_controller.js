const { response, request } = require("express");
const DEPTOS = require("../../models/modulo_departamento/departamento");
const ViewSelectDeptos = require("../../models/modulo_seguridad/views/selec_deptos");

const seleccionarDepartamentos = async (req = request, res = response) => {
    const { id_departamento } = req.params; // Cambiar a query parameter

    try {
        //TO DO: Puede hacerse con un if (PREGUNTAR A LUKE)
        const usuarios = await ViewSelectDeptos.findAll({ where: { ID_DEP: id_departamento } });
        // console.log(usuarios.NOMBRE_DEP); 
        if (usuarios.length > 0) {
            console.log(usuarios[0].NOMBRE_DEP);
        }
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

/* const seleccionarDepartamentos = async (req = request, res = response) => {
    const { id_departamento } = req.params; // Cambiar a query parameter

    try {
        let usuarios;

        if (id_departamento.toUpperCase() === 'TODOS') {
            // Si se selecciona "TODOS", traer todos los registros
            usuarios = await ViewSelectDeptos.findAll();
        } else {
            // Si se selecciona un departamento específico, filtrar por ID_DEP
            usuarios = await ViewSelectDeptos.findAll({ where: { ID_DEP: id_departamento } });
        }

        res.json({
            ok: true,
            status: true,
            usuarios: usuarios
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            status: false,
            msg: 'Talk to the administrator.',
            error: error.message
        });
    }
}; */

/* const seleccionarDepartamentos = async (req = request, res = response) => {
    const { id_departamento } = req.params; // Cambiar a query parameter

    try {
        const departamentoTodos = await ViewSelectDeptos.findOne({ where: { NOMBRE_DEP: 'TODOS' } });
        console.log(departamentoTodos);
        let usuarios;

        if (departamentoTodos && id_departamento == departamentoTodos.ID) {
            // Si se selecciona el departamento "TODOS", traer todos los registros
            usuarios = await ViewSelectDeptos.findAll();
        } else {
            // Si es un número o cualquier otro valor, filtrar por ID_DEP
            usuarios = await ViewSelectDeptos.findAll({ where: { ID_DEP: id_departamento } });
        }

        res.json({
            ok: true,
            status: true,
            usuarios: usuarios
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            status: false,
            msg: 'Talk to the administrator.',
            error: error.message
        });
    }
}; */

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

const getTodosUsuarios = async  (req = request, res = response) => { //PRUEBA
    try {

         const todosUsuarios = await ViewSelectDeptos.findAll();
         res.json({
            ok: true,
            status: true,
            todosUsuarios
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

module.exports = {seleccionarDepartamentos, getDepartamentos, getTodosUsuarios};