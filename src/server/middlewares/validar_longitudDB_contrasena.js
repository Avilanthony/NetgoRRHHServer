const { Op } = require("sequelize");
const { response, request } = require("express");

const validarLongitudDBContra = async(req = request, res = response, next) => {

    const maximo = 12;
    const minimo = 8;

    // data del body 
    let { contrasena = "" } = req.body;

    if(!contrasena) {
        contrasena = ""
    }

    // Validar que la contraseña no sea
    if ( maximo < contrasena.length ) {
        return res.status(400).json({
            ok: false,
            msg: `Número de carácteres máximos en la contraseña: ${maximo}`
        })
    }

    if ( minimo > contrasena.length ) {
        return res.status(400).json({
            ok: false,
            msg: `Número de carácteres mínimo en la contraseña: ${minimo}`
        })
    }

    //TODO OK!
    next();

}

module.exports = {
    validarLongitudDBContra
}