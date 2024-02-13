const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewUserNotification = rrhhNetgo.define(`view_notification_user`, {
    ID_NOTIFICACION: {
        type: DataTypes.INTEGER
    },
    ID_USUARIO_ORIGEN: {
        type: DataTypes.INTEGER
    },    
    ID_USUARIO_DESTINO: {
        type: DataTypes.INTEGER
    },    
    P_NOMBRE: {
        type: DataTypes.STRING
    },
    S_NOMBRE: {
        type: DataTypes.STRING
    },
    P_APELLIDO: {
        type: DataTypes.STRING
    },
    S_APELLIDO: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.STRING
    },
    TOKEN_APP: {
        type: DataTypes.STRING
    },
    ASUNTO: {
        type: DataTypes.STRING
    },
    DETALLE: {
        type: DataTypes.STRING
    },
    FECHA: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'view_notification_user',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewUserNotification;