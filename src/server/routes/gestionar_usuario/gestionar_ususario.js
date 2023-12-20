const { Router } = require('express');
const { check } = require('express-validator');
const { gestionarUsuarioDepto,
        gestionarUsuarioVacaciones,
        gestionarUsuarioLocal,
        gestionarUsuarioActivo,
        gestionarUsuarioRol } = require('../../controllers/gestion_usuarios/gestion_usuarios_controller');
const { subirBoleta } = require('../../controllers/administrativo/adjuntar_boleta_controller');

const router = Router();

router.put("/gest_depto_usuario/:id_usuario", gestionarUsuarioDepto);

router.put("/gest_vacaciones_usuario/:id_usuario", gestionarUsuarioVacaciones);

router.put("/gest_local_usuario/:id_usuario", gestionarUsuarioLocal);

router.put("/gest_estado_usuario/:id_usuario", gestionarUsuarioActivo);

router.put("/gest_rol_usuario/:id_usuario", gestionarUsuarioRol);

router.put("/gest_boleta/:id_usuario", subirBoleta);

module.exports = router;