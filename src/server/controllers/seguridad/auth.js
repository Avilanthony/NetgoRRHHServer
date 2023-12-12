const { response, request } = require("express");
const bcrypt = require('bcryptjs');

const ROLES = require("../../models/modulo_seguridad/rol");
const { generarJWT } = require("../../helpers/jwt");
const USERS = require("../../models/modulo_seguridad/usuario");

const login = async (req = request, res = response) => {
    //Extract body parameters
    const { usuario, contrasena } = req.body;
    try {
        const DBUser = await USERS.findOne({ where: { USUARIO: usuario } });        

        if (!DBUser) {
            return res.status(404).json({
                ok: false,
                status: false,
                msg: 'Usuario o contraseña inválidos.'
            })
        }

        if(DBUser.ESTADO === 'Inactivo'){
            return res.status(401).json({
                ok: false,
                status: false,
                msg: 'El usuario está bloqueado, hable con el administrador.'
            })
        }

        const validate_password = bcrypt.compareSync(contrasena, DBUser.CONTRASENA)
        if (!validate_password) {

            await DBUser.save();

            return res.status(401).json({
                msg: 'Contraseña inválida.'
            });
        }

        //Get the duration of the session token
        //const durationTokenSession = await Parameter.findOne({where:{PARAMETRO: 'DURACION_TOKEN_SESION'}});
        //Generate JWT
        const duracionTokenLogin = '24h';
        const token = await generarJWT( DBUser.ID_USUARIO, DBUser.USUARIO, duracionTokenLogin, process.env.SEMILLA_SECRETA_JWT_LOGIN );

        //DBUser.INTENTOS = 0;                        // Reset attempts to 0
        //DBUser.PRIMER_INGRESO++                     // Increase revenue counter
        //DBUser.FECHA_ULTIMA_CONEXION = new Date();  // Log last connection
        await DBUser.save();   

        return res.status(200).json({
            User: DBUser,
            msg: 'Oke',
            status: true,
            ok: true,
            token
        });

    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            status: false,
            msg: 'Hable con el administrador.'
        });
    };
}

module.exports = {login};
