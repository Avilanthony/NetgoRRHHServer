const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewUserAdminEdit = rrhhNetgo.define(`view_admin_user`, {
    ID: {
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
    IMG: {
        type: DataTypes.TEXT
    },
    LOCAL: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    VACACIONES: {
        type: DataTypes.STRING
    },
    BOLETA_PAGO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.STRING
    },
    ROL: {
        type: DataTypes.STRING
    },
    CORREO: {
        type: DataTypes.STRING
    },
    TELEFONO: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'view_admin_user',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewUserAdminEdit;