//const { login } = require('../../controllers/seguridad/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar_campos');
const { validarEspaciosLogin, validarEspacio } = require('../../middlewares/validar_espacios');
const { Router } = require('express');

const { getTicketUsuario } = require('../../controllers/seguridad/usuario.controller');
const { getDispositivoUser } = require('../../controllers/notificaciones/notificacion.controller');

const router = Router();

router.get('/ticket_usuario/:id_usuario', getTicketUsuario),

router.get('/ticket_noti/enviar', getDispositivoUser)

module.exports = router;