//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');
const { check } = require('express-validator');
const { seleccionarDepartamentos, getDepartamentos, getTodosUsuarios } = require('../../controllers/administrativo/select_deptos_controller');

const router = Router();

router.get('/deptosUsuarios/:id_departamento',[

    check('id_departamento', 'El departamento es obligatorio').not().isEmpty(),

], seleccionarDepartamentos)

router.get('/departamentos', getDepartamentos)

router.get('/todosUsuarios', getTodosUsuarios)

module.exports = router;