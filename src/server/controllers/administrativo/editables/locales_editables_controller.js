const { request, response } = require("express");
const LOCALES = require("../../../models/modulo_locales/locales");
const DEPTOS = require("../../../models/modulo_departamento/departamento");


const deleteLocal = async (req = request, res = response) => {
    
    const {id_local} = req.params; //url

    try {
        const local = await LOCALES.findByPk(id_local);
        
        if (!local) {
            console.log('Local no encontrado');
            return res.status(404).json({
                ok: false,
                msg: "No existe el local"
            });
        }

        /* const {UBICACION} = local; */

        /* const eliminarCampo = USERS.findOne({where: {ID_DEPARTAMENTO: id_departamento}}); */

        const idLocal = await LOCALES.findOne({
            where: {
                UBICACION: "NO ASIGNADO"
            }
        })

        if(!idLocal){
            return res.status(404).json({
                ok: false,
                msg: `No se puede eliminar este local`
            })
        }

        await DEPTOS.update({ID_LOCAL: 5}, {where: {ID_LOCAL: id_local}});

        await local.destroy();

        return res.status(200).json({
            ok: true,
            msg: "Local eliminado con éxito!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            msg: error.message
        });
        
    }
}

const crearLocal = async (req = request, res = response) => {

    const {
        local = "",
    } = req.body;

    try {

        // Crear usuario con el modelo
        DBlocal = await LOCALES.build({

            UBICACION: local
        })

        // Crear usuario de DB
        await DBlocal.save();
        
        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            msg: '¡Creación del local exitosa!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports={deleteLocal, crearLocal};