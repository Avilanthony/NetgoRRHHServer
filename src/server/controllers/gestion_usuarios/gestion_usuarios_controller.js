const { request, response } = require("express");
const USERS = require("../../models/modulo_seguridad/usuario");
const DEPTOS = require("../../models/modulo_departamento/departamento");
const LOCALES = require("../../models/modulo_locales/locales");
const ROLES = require("../../models/modulo_seguridad/rol");

const gestionarUsuarioLocal = async (req = request, res = response) => {

    const { idLocal } = req.body;
    const { id_usuario } = req.params;

    try {
        const usuario = await USERS.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        const local = await LOCALES.findByPk(idLocal);

        await usuario.update({
            ID_LOCAL: idLocal !== "" ? local.ID_LOCAL : USERS.ID_LOCAL,
        }, {
            where: { ID_USUARIO: id_usuario }

        })

        return res.status(200).json({
            ok: true,
            status: true,
            msg: "¡Local actualizado con éxito!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
}

const gestionarUsuarioDepto = async (req = request, res = response) => {

    const { idDepto } = req.body;
    const { id_usuario } = req.params;

    try {
        const usuario = await USERS.findByPk(id_usuario);
        console.log("Este es el usuario: " + usuario);
        console.log("Tipo de usuario:", typeof id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        

        const departamento = await DEPTOS.findByPk(idDepto);
        
        await usuario.update({
            ID_DEPARTAMENTO: idDepto !== "" ? departamento.ID_DEPARTAMENTO : USERS.ID_DEPARTAMENTO,
        }, {
            where: { ID_USUARIO: id_usuario }

        })

        

        return res.status(200).json({
            ok: true,
            status: true,
            msg: "¡Usuario actualizado con éxito!"
        });
        

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
    
}

const gestionarUsuarioVacaciones = async (req = request, res = response) => {
    const { vacaciones } = req.body;
    const { id_usuario } = req.params;

    try {
        const usuario = await USERS.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        // Verificar si vacaciones es un número entero
        if (!Number.isInteger(Number(vacaciones))) {
            console.log('Valor de vacaciones no es un número entero');
            return res.status(400).json({
                ok: false,
                msg: "Solo se aceptan números enteros para las vacaciones."
            });
        }

        await usuario.update({
            VACACIONES: vacaciones !== "" ? vacaciones : USERS.VACACIONES,
        }, {
            where: { ID_USUARIO: id_usuario }
        })

        return res.status(200).json({
            ok: true,
            status: true,
            msg: "¡Vacaciones del usuario actualizadas con éxito!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};

const gestionarUsuarioActivo = async (req = request, res = response) => {
    const { estadoUser } = req.body;
    const { id_usuario } = req.params;

    try {
        const usuario = await USERS.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        await usuario.update({
            ESTADO: estadoUser !== "" ? estadoUser : USERS.ESTADO,
        }, {
            where: { ID_USUARIO: id_usuario }
        })

        return res.status(200).json({
            ok: true,
            status: true,
            msg: "¡El estado del usuario se actualizado con éxito!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};

const gestionarUsuarioRol = async (req = request, res = response) => {

    const { idRol } = req.body;
    const { id_usuario } = req.params;

    try {
        const usuario = await USERS.findByPk(id_usuario);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        const rol = await ROLES.findByPk(idRol);

        await usuario.update({
            ID_ROL: idRol !== "" ? rol.ID_ROL : USERS.ID_ROL,
        }, {
            where: { ID_USUARIO: id_usuario }

        })

        return res.status(200).json({
            ok: true,
            status: true,
            msg: "¡El rol fue actualizado con éxito!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {
    gestionarUsuarioDepto,
    gestionarUsuarioVacaciones,
    gestionarUsuarioLocal,
    gestionarUsuarioActivo,
    gestionarUsuarioRol
};