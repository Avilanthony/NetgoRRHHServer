const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewUsuarios = rrhhNetgo.define(`view_datos`, {
    USUARIO: {
        type: DataTypes.STRING
    },
    ROL: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    LOCAL: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'view_datos',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewUsuarios;