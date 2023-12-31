//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { deleteLocal, crearLocal } = require('../../../controllers/administrativo/editables/locales_editables_controller');
const { validarCampos } = require('../../../middlewares/validar_campos');
const { check } = require('express-validator');


const router = Router();

router.delete('/delete_local/:id_local', deleteLocal)

router.post('/create_local',[
    check('local', 'El nombre del local es obligatorio').not().isEmpty(),
    check('local', 'El nombre del local no debe contener números').isAlpha('es-ES', {ignore:' '}),
    validarCampos
], crearLocal)

module.exports = router;