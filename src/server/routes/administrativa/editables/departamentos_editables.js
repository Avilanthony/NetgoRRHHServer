//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { deleteDepartamento, crearDepto } = require('../../../controllers/administrativo/editables/departamentos_editables_controller');
const { validarCampos } = require('../../../middlewares/validar_campos');
const { check } = require('express-validator');


const router = Router();

router.delete('/delete_dep/:id_departamento', deleteDepartamento)

router.post('/create_dep',[
    check('departamento', 'El nombre del departamento es obligatorio').not().isEmpty(),
    check('departamento', 'El nombre departamento no debe contener números').isAlpha('es-ES', {ignore:' '}),
    check('id_local', 'El nombre del local es obligatorio').not().isEmpty(),
    validarCampos
], crearDepto)

module.exports = router;