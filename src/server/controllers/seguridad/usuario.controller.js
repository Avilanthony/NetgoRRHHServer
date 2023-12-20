const { request, response } = require("express");
const bcrypt = require('bcryptjs');

const ROLES = require("../../models/modulo_seguridad/rol");
const USERS = require("../../models/modulo_seguridad/usuario");
const DNI = require("../../models/modulodni/dni");
const ViewUsuarios = require("../../models/modulo_seguridad/views/usuario_datos_view");
const DEPTOS = require("../../models/modulo_departamento/departamento");
const ViewPerfil = require("../../models/modulo_seguridad/views/perfil_usuario_view");
const ViewTicket = require("../../models/modulo_ticket/view/ticket_view");
const ViewVacacionesUser = require("../../models/modulo_seguridad/views/vacaciones_view");
const LOCALES = require("../../models/modulo_locales/locales");

const registrar = async (req = request, res = response) => {

    const {
        primer_nombre = "",
        segundo_nombre = "",
        primer_apellido = "",
        segundo_apellido = "",
        usuario = "",
        dni = "",
        correo = "",
        contrasena = "",
        confcontrasena = "",
        telefono } = req.body;

    try {

        // Validar que hagan match la confirmación de contraseña
        if (contrasena !== confcontrasena) {
            return res.status(401).json({
                ok: false,
                msg: `Contraseña no coincide`
            })
        }

        // Cargar el id del rol default (Para no Hardcodear)
        const idRol = await ROLES.findOne({
            where: {
                ROL: 'DEFAULT'
            }
        })

        // Cargar el id del rol default (Para no Hardcodear)
        const idDep = await DEPTOS.findOne({
            where: {
                DEPARTAMENTO: 'NINGUNO'
            }
        })

        // Cargar el id del rol default (Para no Hardcodear)
        const idLoc = await LOCALES.findOne({
            where: {
                UBICACION: 'NINGUNO'
            }
        })

        // Crear usuario con el modelo
        DBusuario = await USERS.build({
            USUARIO: usuario,
            PRIMER_NOMBRE: primer_nombre,
            SEGUNDO_NOMBRE: segundo_nombre,
            APELLIDO_PATERNO: primer_apellido,
            APELLIDO_MATERNO: segundo_apellido,
            CONTRASENA: contrasena,
            ESTADO: 'NUEVO',
            CORREO: correo,
            TELEFONO: telefono,
            ID_ROL: idRol.ID_ROL,
            ID_DEPARTAMENTO: idDep.ID_DEPARTAMENTO,
            ID_LOCAL: idLoc.ID_LOCAL
        })

        // Hashear contraseña
        const salt = bcrypt.genSaltSync();
        DBusuario.CONTRASENA = bcrypt.hashSync(contrasena, salt);

        // Crear usuario de DB
        await DBusuario.save();

        const dniUsuario = await USERS.findOne({where: {USUARIO: usuario}})

        dbDni = await DNI.build({
            DNI: dni,
            ID_USUARIO: dniUsuario.ID_USUARIO
        })

        await dbDni.save();

        
        // Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            status: true,
            msg: 'Registro éxitoso'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const getUsuario = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del usuario recibido:', id_usuario);

        const usuario = await ViewUsuarios.findByPk(id_usuario);

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

const getTicketUsuario = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del usuario recibido:', id_usuario);

        const usuario = await ViewTicket.findByPk(id_usuario);

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

const getUsuarioPerfil = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del usuario recibido:', id_usuario);

        const usuario = await ViewPerfil.findByPk(id_usuario);

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

const getVacacionesUser = async (req = request, res = response) => {
    const {id_usuario} = req.params;

    try {
        console.log('ID del usuario recibido:', id_usuario);

        const usuario = await ViewVacacionesUser.findByPk(id_usuario);

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
    registrar,
    getUsuario,
    getUsuarioPerfil,
    getTicketUsuario,
    getVacacionesUser };