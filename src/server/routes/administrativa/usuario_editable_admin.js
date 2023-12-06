//const { login } = require('../../controllers/seguridad/auth');
const { Router } = require('express');

const { getUsuarioEditAdmin } = require('../../controllers/administrativo/usuario_admin_controller');

const router = Router();

router.get('/admin_user/:id_usuario', getUsuarioEditAdmin)

module.exports = router;