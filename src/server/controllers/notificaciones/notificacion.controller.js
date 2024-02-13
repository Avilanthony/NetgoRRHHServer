const { request, response } = require("express");

const ViewUserNotification = require("../../models/modulo_notificaciones/view/notificacion_user_view");
const NOTIFICACION = require("../../models/modulo_notificaciones/notificacion_user");
const ViewUsuarios = require("../../models/modulo_seguridad/views/usuario_datos_view");
const USERS = require("../../models/modulo_seguridad/usuario");
const DEPTOS = require("../../models/modulo_departamento/departamento");

const getNotificacionUser = async (req = request, res = response) => {

    const {
        id_usuario
    } = req.params;

    try {

        const usuario = await ViewUserNotification.findAll({
            attributes: [
                'ID_NOTIFICACION',
                'ID_USUARIO_ORIGEN',
                'ID_USUARIO_DESTINO',
                'P_NOMBRE',
                'S_NOMBRE',
                'P_APELLIDO',
                'S_APELLIDO',
                'DEPARTAMENTO',
                'ESTADO',
                'TOKEN_APP',
                'ASUNTO',
                'DETALLE',
                'FECHA'
            ],
            where: {
                ID_USUARIO_DESTINO: id_usuario
            }
        });

        if (usuario.length === 0) {
            console.log('No tiene notificaciones');
            return res.status(404).json({
                ok: false,
                msg: "No tiene notificaciones"
            });
        }

        res.json({ usuario });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};

const postNotificacion = async (req = request, res = response) => {
    const {
        id_usuario_origen = "",
        asunto = "",
        detalle = "",
        departamento_usuario = ""
    } = req.body;

    try {
        const usuario = await USERS.findAll ({
            attributes: [
                'ID_USUARIO',
            ],where : {ID_DEPARTAMENTO : 1}
        })

        const departamento = await DEPTOS.findOne ({
            where : {DEPARTAMENTO : departamento_usuario}
        })

        const idsUsuarios = usuario.map(usuario => usuario.ID_USUARIO);

        //console.log(idsUsuarios);

        // Crear notificacion con el modelo
        for (const idUsuario of idsUsuarios) {
            await NOTIFICACION.create({
                ID_USUARIO_ORIGEN: id_usuario_origen,
                ID_USUARIO_DESTINO: idUsuario,
                ID_DEPTO_ORIGEN: departamento.ID_DEPARTAMENTO,
                ID_DEPTO_DESTINO: 1,
                ASUNTO: asunto,
                DETALLE: detalle,
            });
        }

        // Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            status: true,
            msg: 'Notificacion éxitosa',
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};

const postNotificacionRRHH = async (req = request, res = response) => {
    const {
        id_usuario_origen = "",
        asunto = "",
        detalle = "",
        id_Depto_Destino
    } = req.body;

    try {
        const usuario = await USERS.findAll ({
            attributes: [
                'ID_USUARIO',
            ],where : {ID_DEPARTAMENTO : id_Depto_Destino}
        })

        const departamento = await DEPTOS.findOne ({
            where : {DEPARTAMENTO : 'RRHH'}
        })

        const idsUsuarios = usuario.map(usuario => usuario.ID_USUARIO);

        //console.log(idsUsuarios);

        // Crear notificacion con el modelo
        for (const idUsuario of idsUsuarios) {
            await NOTIFICACION.create({
                ID_USUARIO_ORIGEN: id_usuario_origen,
                ID_USUARIO_DESTINO: idUsuario,
                ID_DEPTO_ORIGEN: departamento.ID_DEPARTAMENTO,
                ID_DEPTO_DESTINO: id_Depto_Destino,
                ASUNTO: asunto,
                DETALLE: detalle,
            });
        }

        // Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            status: true,
            msg: 'Notificacion a usuarios eviada éxitosamente',
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    }
};


module.exports = {
    getNotificacionUser,
    postNotificacion, 
    postNotificacionRRHH
};