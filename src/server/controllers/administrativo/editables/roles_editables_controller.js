const { request, response } = require("express");
const USERS = require("../../../models/modulo_seguridad/usuario");
const ROLES = require("../../../models/modulo_seguridad/rol");


const deleteRol = async (req = request, res = response) => {
    
    const { id_rol } = req.params; //url

    try {
        const rol = await ROLES.findByPk(id_rol);
        
        if (!rol) {
            console.log('Rol no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el rol"
            });
        }

        // Corregir el nombre de la variable a local
        const { ROL } = rol;

        // Asegúrate de que USERS está correctamente definido y es tu modelo de usuarios
        await USERS.update({ ID_ROL: null }, { where: { ID_ROL: id_rol } });

        await rol.destroy();

        return res.status(200).json({
            ok: true,
            msg: "Rol eliminado con éxito!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            msg: error.message
        });
        
    }
}

const crearRol = async (req = request, res = response) => {

    const {
        rol = "",
    } = req.body;

    try {

        // Crear usuario con el modelo
        DBrol = await ROLES.build({

            ROL: rol
        })

        // Crear usuario de DB
        await DBrol.save();
        
        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            msg: '¡Creación del rol exitosa!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports={deleteRol, crearRol};