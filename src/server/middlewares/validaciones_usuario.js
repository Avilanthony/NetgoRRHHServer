const { response, request } = require("express");
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");

const USERS = require("../models/modulo_seguridad/usuario");

const existeEmail = async( req = request, res = response, next ) => {

    const { correo } = req.body;

    // Verificar el email
    let user = await USERS.findOne({ where: { CORREO: correo } });
    if ( user ) {

        return res.status(400).json({
            ok: false,
            msg: 'Ya está registrado este correo'
        })
    }

    next()
}

const existeUsuario = async( req = request, res = response, next ) => {

    const { usuario = "" } = req.body;

    // Verificar el usuario
    let user = await USERS.findOne({ where: { USUARIO: usuario } });

    if ( user ) {
        return res.status(400).json({
            ok: false,
            msg: 'Ya está registrado este usuario'
        })
    }

    next()
}

const existeUsuarioUpdated = async( req = request, res = response, next ) => {

    const { id_usuario } = req.params;
    const { usuario = "" } = req.body;

    // Verificar el usuario
    let user = await USERS.findOne({
        where: {    //Where ROL = rol and NOT ID_ROL = id_rol
            USUARIO: usuario,
            [Op.not] : [
                {ID_USUARIO: id_usuario}
            ]       
        }
    });

    if ( user ) {
        return res.status(400).json({
            ok: false,
            msg: 'Ya está registrado este usuario'
        })
    }

    next()
}

const noExisteUsuario = async( req = request, res = response, next ) => {

    const { id_usuario } = req.body;

    // Verificar el usuario
    let user = await USERS.findByPk( id_usuario );

    if ( !user ) {
        return res.status(400).json({
            ok: false,
            msg: 'No existe un usuario con el ID: '+id_usuario
        })
    }

    next()
}

const validarEspaciosUsuario = ( req = request, res = response, next ) => {

    const { nombre = "" } = req.body;

    if ( nombre.includes('  ') ) {
        return res.status(400).json({
            ok: false,
            msg: 'No se permite más de 1 espacio en blanco entre palabras en el nombre'
        })
    }

    next()
}

const validarContrasenaActual = async( req = request, res = response, next ) => {

    const { id_usuario } = req.params;
    const { confcontrasena } = req.body;

    // Verificar el usuario
    let user = await USERS.findByPk( id_usuario );

    // Confirmar si el contraseña hace match
    const validarContrasena = await bcrypt.compareSync( confcontrasena, user.CONTRASENA )
    if( !validarContrasena ) {

        return res.status(401).json({
            ok: false,
            msg: 'Contraseña incorrecta'
        });
    }

    next()
}

/* const validarContrasenaActualForPreguntas = async( req = request, res = response, next ) => {

    const { id_usuario } = req.params;
    const { confirmContrasenaActual } = req.body;

    // Verificar el usuario
    let user = await Usuario.findByPk( id_usuario );

    // Confirmar si el contraseña hace match
    const validarContrasena = await bcrypt.compareSync( confirmContrasenaActual, user.CONTRASENA )
    if( !validarContrasena ) {

        eventBitacora(new Date, id_usuario, 13, 'ACTUALIZACION', 'INTENTO DE CONFIGURACIÓN DE PREGUNTA SECRETA SIN ÉXITO, CONTRASEÑA INCORRECTA');

        return res.status(401).json({
            ok: false,
            msg: 'Contraseña incorrecta'
        });
    }

    next()
} */

module.exports = {
    /* validarContrasenaActualForPreguntas, */
    validarContrasenaActual,
    existeEmail,
    existeUsuario,
    existeUsuarioUpdated,
    noExisteUsuario,
    validarEspaciosUsuario
}
