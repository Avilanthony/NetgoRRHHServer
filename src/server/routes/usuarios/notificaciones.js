//const { login } = require('../../controllers/seguridad/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar_campos');
const { validarEspaciosLogin, validarEspacio } = require('../../middlewares/validar_espacios');
const { Router } = require('express');

const { getTicketUsuario } = require('../../controllers/seguridad/usuario.controller');
const { getNotificacionUser, postNotificacion, postNotificacionRRHH } = require('../../controllers/notificaciones/notificacion.controller');

const router = Router();

router.get('/ticket_usuario/:id_usuario', getTicketUsuario),

router.get('/ticket_noti/:id_usuario', getNotificacionUser);

router.post('/enviar_ticket', postNotificacion);

router.post('/enviar_noti_rrhh', postNotificacionRRHH);


module.exports = router;