const jwt = require('jsonwebtoken')

const generarJWT = ( uid, user ,duracion, semilla ) => {//FUNCIÓN QUE USA EL UID, LA DURACIÓN Y LA SEMILLA DEL TOKEN

    const payload = { uid };

    const prueba = { user };
    
    return new Promise((resolve, reject) => {//PROMESA QUE DA LA RESPUESTA O EL RECHAZO DEL ID CON LA SEMILLA
        jwt.sign( payload, semilla, {
            expiresIn: duracion
        }, (err, token) => {
    
            if ( err ) {
                // TODO MAL
                console.log(err);
                reject(err);
            } else {
                // TODO BIEN
                resolve(token);
            }
    
        })
    })

}


module.exports = {
    generarJWT,
}