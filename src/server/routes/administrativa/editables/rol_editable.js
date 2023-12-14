//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { deleteLocal, crearLocal } = require('../../../controllers/administrativo/editables/locales_editables_controller');
const { validarCampos } = require('../../../middlewares/validar_campos');
const { check } = require('express-validator');
const { deleteRol, crearRol } = require('../../../controllers/administrativo/editables/roles_editables_controller');


const router = Router();

router.delete('/delete_rol/:id_rol', deleteRol)

router.post('/create_rol',[
    check('rol', 'El nombre del rol es obligatorio').not().isEmpty(),
    check('rol', 'El nombre rol no debe contener números').isAlpha('es-ES', {ignore:' '}),
    validarCampos
], crearRol)

module.exports = router;