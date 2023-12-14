const { Router } = require('express');
const { check } = require('express-validator');
const { gestionarUsuarioDepto, gestionarUsuarioVacaciones } = require('../../controllers/gestion_usuarios/gestion_usuarios_controller');

const router = Router();

router.put("/gestionar_depto_usuario/:id_usuario", gestionarUsuarioDepto);

router.put("/gest_vacaciones_usuario/:id_usuario", gestionarUsuarioVacaciones)

module.exports = router;