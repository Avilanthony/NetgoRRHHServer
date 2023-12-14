const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewSelectLocal = rrhhNetgo.define(`view_select_deptos`, {
    ID: {
        type: DataTypes.INTEGER
    },
    NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO: {
        type: DataTypes.STRING
    },
    ID_LOCAL: {
        type: DataTypes.INTEGER
    },
    LOCAL: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'view_select_deptos',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewSelectLocal;