const { login } = require('../../controllers/seguridad/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar_campos');
const { validarEspaciosLogin } = require('../../middlewares/validar_espacios');
const { Router } = require('express');

const router = Router();

router.post('/login',[

    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('usuario', 'El usuario debe escribirse en mayúsculas').isUppercase(),
    check('usuario', 'El usuario no debe tener más de 15 caracteres').isLength({max: 15}),
    /* check('contrasena', 'La contraseña es obligatoria').not().isEmpty(), */
    validarEspaciosLogin,
    validarCampos

],login)

module.exports = router;