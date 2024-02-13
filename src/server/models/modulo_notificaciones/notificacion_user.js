const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');
/* const USERS = require('../../models/modulo_seguridad/usuario'); */

const NOTIFICACION = rrhhNetgo.define('tbl_mn_notificaciones', {
    ID_NOTIFICACION: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true // Si es una clave primaria autoincremental
    },
    ID_USUARIO_ORIGEN: {
        type: DataTypes.INTEGER
    },  
    ID_USUARIO_DESTINO: {
        type: DataTypes.INTEGER
    },  
    ID_DEPTO_ORIGEN: {
        type: DataTypes.INTEGER
    },
    ID_DEPTO_DESTINO: {
        type: DataTypes.INTEGER
    },  
    ASUNTO: {
        type: DataTypes.STRING
    },
    DETALLE: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_mn_notificaciones',
    timestamps: false,
    //createdAt: 'FECHA_Y_HORA',
}); 

module.exports = NOTIFICACION;