const { request, response } = require("express");

const USERS = require("../../models/modulo_seguridad/usuario");
const { Op } = require("sequelize");

const getDispositivoUser = async (req = request, res = response) => {

    /* try {
        
        const usuario = await USERS.findOne({ where: {
            [Op.and]: [
              { ID_DEPARTAMENTO: 1 },              
            ],
            [Op.not]: [
                { TOKEN_DISPOSITIVO: null }
            ]
          } });
            
        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }

        res.json({token_dispositivo: usuario.TOKEN_DISPOSITIVO});
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: error.message
        });
    } */

    try {

        const usuario = await USERS.findOne({ where: {
            [Op.and]: [
              { ID_DEPARTAMENTO: 1 },              
            ],
            [Op.not]: [
                { TOKEN_DISPOSITIVO: null }
            ]
          } });
          if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el usuario"
            });
        }
        res.json({token_dispositivo: usuario.TOKEN_DISPOSITIVO});
       
   } catch (error) {
    console.error(error);

    res.status(500).json({
        msg: error.message
    });
   }
};

module.exports = {   
    getDispositivoUser,
};