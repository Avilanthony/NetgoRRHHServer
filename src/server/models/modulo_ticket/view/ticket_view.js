const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');

const ViewTicket = rrhhNetgo.define(`view_ticket`, {
    ID: {
        type: DataTypes.INTEGER
    },
    IMG: {
        type: DataTypes.TEXT
    },
    PRIMER_NOMBRE: {
        type: DataTypes.STRING
    },
    SEGUNDO_NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO_PATERNO: {
        type: DataTypes.STRING
    },
    APELLIDO_MATERNO: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'view_ticket',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewTicket;