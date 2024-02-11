const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');

const ViewLogin = rrhhNetgo.define(`view_login`,{
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    USUARIO: {
        type: DataTypes.STRING
    },
    PRIMER_NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO_PATERNO: {
        type: DataTypes.STRING
    },
    CONTRASENA: {
        type: DataTypes.TEXT
    },
    ESTADO: {
        type: DataTypes.STRING
    } ,
    ID_DNI: {
        type: DataTypes.INTEGER
    },
    DNI: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'view_login',
    timestamps: false
})

//Para exportar el modelo
module.exports = ViewLogin;