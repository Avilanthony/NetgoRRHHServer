const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');


const ViewPerfil = rrhhNetgo.define(`view_perfil`, {
    ID: {
        type: DataTypes.INTEGER
    },
    IMAGEN: {
        type: DataTypes.TEXT
    },
    PRIMER_NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO_PATERNO: {
        type: DataTypes.STRING
    },
    CORREO: {
        type: DataTypes.STRING
    },
    TELEFONO: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'view_perfil',
    timestamps: false,
})

//Para exportar el modelo
module.exports = ViewPerfil;