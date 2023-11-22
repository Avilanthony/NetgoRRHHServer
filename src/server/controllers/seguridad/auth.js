const { response, request } = require("express");
const bcrypt = require('bcryptjs');

const ROLES = require("../../models/modulo_seguridad/rol");
const { generarJWT } = require("../../helpers/jwt");
const USERS = require("../../models/modulo_seguridad/usuario");

const login = async(req = request, res = response) => {

    const { usuario, contrasena } = req.body;

    try {
        // Confirmar existencia del usuario
        const dbUser = await USERS.findOne({where: { USUARIO: usuario }}) //VARIABLE QUE BUSCA UN USUARIO 
        /* const intentosParametro = await Parametro.findOne({where: { PARAMETRO: 'ADMIN_INTENTOS' }}) */
        // Parametros del mailer
        /* const correoSMTP = await Parametro.findOne({where: { PARAMETRO: 'SMTP_CORREO' }}); */
        /* const nombreEmpresaSMTP = await Parametro.findOne({where: { PARAMETRO: 'SMTP_NOMBRE_EMPRESA' }}); */
        // Template del correo
        /* const handlebarOptions = cargarOpcionesHBS() */
        /* const transporte = await crearTransporteSMTP(); */ // Transportador
        /* transporte.use('compile', hbs(handlebarOptions)) */

        
        if( !dbUser ) {
            return res.status(404).json({
                ok: false,
                msg: 'El correo o la contraseña no coinciden'
            })
        }

        // Confirmar si el contraseña hace match
        /* const validarContraseña = await bcrypt.compareSync( contrasena, dbUser.CONTRASENA )
        if( !validarContraseña ) {

            // Incrementa en 1 los intentos usados
            dbUser.INTENTOS++;

            // Guardar evento
            eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `INTENTO #${dbUser.INTENTOS} DE INICIO DE SESIÓN SIN ÉXITO`);

            // Bloquear usuario si los intentos se acaban
            if(dbUser.INTENTOS === parseInt( intentosParametro.VALOR, 10 ) && !(dbUser.USUARIO === 'ROOT')) {

                dbUser.ESTADO_USUARIO = 'BLOQUEADO';

                // Guardar evento
                if( parseInt( intentosParametro.VALOR, 10 ) === 1 ) {
                    eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `USUARIO BLOQUEADO POR INICIO DE SESIÓN SIN ÉXITO`);
                } else {
                    eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `USUARIO BLOQUEADO POR SUPERAR LOS ${intentosParametro.VALOR} INTENTOS DE INICIO DE SESIÓN`);
                }

                // Notificar por correo
                transporte.sendMail({
                    from: `"${nombreEmpresaSMTP.VALOR} 🍔" <${correoSMTP.VALOR}>`, // Datos de emisor
                    to: dbUser.CORREO_ELECTRONICO, // Receptop
                    subject: "Cuenta bloqueada 🍔", // Asunto
                    template: 'correos',
                    context: {
                        titulo: 'Bloqueo de cuenta',
                        contenido: `Le informamos que su cuenta ha sido bloqueada debido a que ha excedido el número de intentos permitidos para ingresar su contraseña.`
                    }
                }, (err) => {
                    if(err) { console.log( err ) };
                })

                // Guardar cambios del usuario
                await dbUser.save();

                return res.status(404).json({
                    ok: false,
                    msg: 'Ha superado los intentos permitidos, su cuenta ha sido bloqueada, reinicie la contraseña.'
                });

            };

            // Guardar cambios del usuario
            await dbUser.save();
            
            // Retornar que no coincide la contraseña
            return res.status(404).json({
                ok: false,
                msg: 'El correo o la contraseña no coinciden'
            });
        }; */

        // Confirmar acceso válido
        if( !(dbUser.ESTADO_USUARIO === 'NUEVO' || dbUser.ESTADO_USUARIO === 'ACTIVO') ) {

            if(dbUser.ESTADO_USUARIO === 'BLOQUEADO') {

                // Guardar evento
                /* eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `INTENTO DE INICIO DE SESIÓN CON USUARIO BLOQUEADO`); */

                return res.status(401).json({
                    ok: false,
                    msg: `El usuario esta bloqueado, hable con el administrador o reinicie la contraseña`
                })
            };

            // Guardar evento
            /* eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `INTENTO DE INICIO DE SESIÓN CON USUARIO ${dbUser.ESTADO_USUARIO.charAt(dbUser.ESTADO_USUARIO.length-1) === 'O' ? ''.trim() : 'EN '}${dbUser.ESTADO_USUARIO}`); */

            // Si el estado no es nuevo o activo
            return res.status(401).json({
                ok: false,
                msg: `El usuario esta ${dbUser.ESTADO_USUARIO.charAt(dbUser.ESTADO_USUARIO.length-1) === 'O' ? ''.trim() : 'en '}${dbUser.ESTADO_USUARIO.toLowerCase()}, hable con el administrador`
            });

        };

        // Traer el rol default
        const rolDefault = await ROLES.findOne({where: {ROL: 'DAFAULT'}})

        // Válidar tener un rol con acceso
        if( dbUser.ID_ROL === rolDefault.ID_ROL ) {
            /* // Notificar por correo
            transporte.sendMail({
                from: `"${nombreEmpresaSMTP.VALOR} 🍔" <${correoSMTP.VALOR}>`, // Datos de emisor
                to: dbUser.CORREO_ELECTRONICO, // Receptop
                subject: "Acceso no válido 🍔", // Asunto
                template: 'correos',
                context: {
                    titulo: 'Acceso <strong>restringido</strong>',
                    contenido: `Su cuenta no posee un acceso válido al sistema, contacte con el administrador para solicitar el acceso al sistema.`
                }
            }, (err) => {
                if(err) { console.log( err ) };
            }) */

            // Guardar evento
            /* eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `INTENTO DE INICIO DE SESIÓN SIN ACCESO VÁLIDO`); */

            return res.status(401).json({
                ok: false,
                msg: 'El usuario no tiene acceso válido, hable con el administrador para solicitar acceso'
            });
        };

        // Validar fecha de contraseña siga siendo válida
        /* if (dbUser.FECHA_VENCIMIENTO < new Date()){
            
            // Guardar evento
            eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `INTENTO DE INICIO DE SESIÓN CON CONTRASEÑA CADUCADA`);

            return res.status(401).json({
                ok: false,
                msg: 'Contraseña del usuario ha caducado, cambie la contraseña'
            });
        }; */

        // Generar JWT
        const duracionTokenLogin = '24h';
        const token = await generarJWT( dbUser.ID_USUARIO, duracionTokenLogin, process.env.SEMILLA_SECRETA_JWT_LOGIN );

        const nombreROL = await ROLES.findByPk(dbUser.ID_ROL);
        
        /* dbUser.INTENTOS = 0;     */                    // Reiniciar intentos a 0
        dbUser.PRIMER_INGRESO++                     // Aumentar contador de ingresos
        /* dbUser.FECHA_ULTIMA_CONEXION = new Date(); */  // Registrar última conexión
        await dbUser.save();

        // Guardar evento
        /* eventBitacora(new Date, dbUser.ID_USUARIO, 3, 'INGRESO', `${dbUser.USUARIO} INICIO SESIÓN`); */

        //Respuesta del servicio
        return res.json({
            ok: true,
            id_usuario : dbUser.ID_USUARIO,
            id_rol: dbUser.ID_ROL,
            rol: nombreROL,
            estado: dbUser.ESTADO_USUARIO,
            nombre: dbUser.NOMBRE_USUARIO,
            usuario: dbUser.USUARIO,
            correo: dbUser.CORREO_ELECTRONICO,
            /* fecha_vencimiento: dbUser.FECHA_VENCIMIENTO, */
            token
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con su administrador'
        });
    };
}

module.exports = {login};