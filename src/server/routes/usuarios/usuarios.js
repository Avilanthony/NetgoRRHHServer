//const { login } = require('../../controllers/seguridad/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar_campos');
const { validarEspaciosLogin, validarEspacio } = require('../../middlewares/validar_espacios');
const { Router } = require('express');
const { login } = require('../../controllers/seguridad/auth');
const { emailExistente } = require('../../helpers/db_validators');
const { existeUsuario } = require('../../middlewares/validaciones_usuario');
const { validarLongitudDBContra } = require('../../middlewares/validar_longitudDB_contrasena');
const { validarContraseña } = require('../../middlewares/validar_contrasena');
const { registrar, getUsuario, getUsuarioPerfil, getTicketUsuario, getVacacionesUser } = require('../../controllers/seguridad/usuario.controller');
const { updatePerfilUsuario } = require('../../controllers/editar_perfil_usuario/editar_perfil_controller');
const { subirImagen } = require('../../controllers/editar_perfil_usuario/editar_imagen_controller');
const { subirDNI } = require('../../controllers/editar_perfil_usuario/editar_dni_controller');
const { getBoletaUsuario } = require('../../controllers/boleta/boleta.controller');

const router = Router();

router.post('/login',[

    check('dni', 'El dni de la persona es obligatorio').not().isEmpty(),
    check('dni', 'El dni no debe llevar espacios').custom(validarEspacio),
    check('dni', 'El dni no debe tener menos de 13 caracteres').isLength({min: 13}),
    check('dni', 'El dni no debe tener más de 13 caracteres').isLength({max: 13}),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    validarEspaciosLogin,
    validarCampos

],login)

router.post('/registro',[

    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('usuario', 'El usuario debe escribirse en mayúsculas').isUppercase(),
    check('usuario', 'El usuario no debe tener menos de 5 caracteres').isLength({min: 5}),
    check('usuario', 'El usuario no debe tener más de 15 caracteres').isLength({max: 15}),
    check('primer_nombre', 'El primer nombre de la persona es obligatorio').not().isEmpty(),
    check('primer_nombre', 'El primer nombre no debe contener números').isAlpha('es-ES', {ignore:' '}),
    //check('segundo_nombre', 'El primer segundo nombre de la persona es obligatorio').not().isEmpty(),
    check('segundo_nombre', 'El segundo nombre no debe contener números').isAlpha('es-ES', {ignore:' '}),
    check('primer_apellido', 'El apellido de la persona es obligatorio').not().isEmpty(),
    check('primer_apellido', 'El segundo apellido no debe contener números').isAlpha('es-ES', {ignore:' '}),
    //check('segundo_apellido', 'El segundo apellido de la persona es obligatorio').not().isEmpty(),
    check('segundo_apellido', 'El segundo apellido no debe contener números').isAlpha('es-ES', {ignore:' '}),
    check('dni', 'El dni de la persona es obligatorio').not().isEmpty(),
    check('dni', 'El dni no debe llevar espacios').custom(validarEspacio),
    check('dni', 'El dni no debe tener menos de 13 caracteres').isLength({min: 13}),
    check('dni', 'El dni no debe tener más de 13 caracteres').isLength({max: 13}),
    check('correo', 'El correo del usuario es obligatorio').not().isEmpty(),
    check('correo', 'El correo del usuario no es válido').isEmail(),
    check('correo').custom(emailExistente),
    check('telefono', 'El telefono de la persona es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono no debe llevar espacios').custom(validarEspacio),
    check('telefono', 'El telefono no debe tener menos de 8 caracteres').isLength({min: 8}),
    check('telefono', 'El telefono no debe tener más de 8 caracteres').isLength({max: 8}),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    check('contrasena', 'La contraseña no debe llevar espacios').custom(validarEspacio),
    check('contrasena', 'La contraseña no debe tener menos de 8 caracteres').isLength({min: 8}),
    check('contrasena', 'La contraseña no debe tener más de 12 caracteres').isLength({max: 12}),
    check('confcontrasena', 'Debe confirmar su contraseña').not().isEmpty(),
    check('confcontrasena', 'La contraseña no debe tener menos de 8 caracteres').isLength({min: 8}),
    check('confcontrasena', 'La contraseña no debe tener más de 12 caracteres').isLength({max: 12}),
    check('confcontrasena', 'La contraseña no debe llevar espacios').custom(validarEspacio),
    existeUsuario,
    validarLongitudDBContra,
    validarContraseña,
    validarCampos
    
],registrar)

router.get('/:id_usuario',getUsuario)

router.get('/perfil_usuario/:id_usuario', getUsuarioPerfil)

router.get('/vacaciones/:id_usuario', getVacacionesUser)

router.put('/editar_usuario/:id_usuario', [
    check('correo', 'El correo del usuario es obligatorio').not().isEmpty(),
    check('correo', 'El correo del usuario no es válido').isEmail(),
    check('correo').custom(emailExistente),
    check('telefono', 'El telefono de la persona es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono no debe llevar espacios').custom(validarEspacio)
], updatePerfilUsuario)

router.put('/subir_imagen/:id_usuario', subirImagen);

router.put('/subir_dni/:id_usuario', subirDNI);

router.get('/boleta_usuario/:id_usuario', getBoletaUsuario)

module.exports = router;