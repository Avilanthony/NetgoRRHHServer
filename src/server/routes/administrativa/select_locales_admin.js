//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { check } = require('express-validator');
const { seleccionarLocales, getLocales } = require('../../controllers/administrativo/select_local_controller');

const router = Router();

router.get('/localesUsuarios/:id_local',[

    check('id_local', 'El local es obligatorio').not().isEmpty(),

], seleccionarLocales)

router.get('/locales', getLocales)

module.exports = router;