const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewVacacionesUser = rrhhNetgo.define(`view_vacaciones`, {
    ID: {
        type: DataTypes.INTEGER
    },
    PRIMER_NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO_PATERNO: {
        type: DataTypes.STRING
    },
    VACACIONES: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'view_vacaciones',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewVacacionesUser;