const { request, response } = require("express");
const bcrypt = require('bcryptjs');

const ROLES = require("../../models/modulo_seguridad/rol");
const USERS = require("../../models/modulo_seguridad/usuario");
const DNI = require("../../models/modulodni/dni");

const registrar = async (req = request, res = response) => {

    const {
        nombre = "",
        apellido = "",
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

        // Crear usuario con el modelo
        DBusuario = await USERS.build({
            USUARIO: usuario,
            PRIMER_NOMBRE: nombre,
            APELLIDO_PATERNO: apellido,
            CONTRASENA: contrasena,
            ESTADO: 'NUEVO',
            CORREO: correo,
            TELEFONO: telefono,
            ID_ROL: idRol.ID_ROL
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
        return res.status(201).json({
            ok: true,
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

module.exports = { registrar };