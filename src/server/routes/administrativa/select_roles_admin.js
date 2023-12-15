//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { check } = require('express-validator');
const { seleccionarRoles } = require('../../controllers/administrativo/select_rol_controller.js');
const { getRoles } = require('../../controllers/administrativo/select_rol_controller.js');

const router = Router();

router.get('/rolesUsuario/:id_rol',[

    check('id_rol', 'El rol es obligatorio').not().isEmpty(),

], seleccionarRoles)

router.get('/roles', getRoles)

module.exports = router;