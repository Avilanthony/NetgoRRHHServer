const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const USERS = ballenita.define('tbl_ms_usuario', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ID_ROL: {
        type: DataTypes.INTEGER
    },
    ID_DEPARTAMENTO: {
        type: DataTypes.INTEGER
    },
    USUARIO: {
        type: DataTypes.STRING
    },
    NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.BOOLEAN
    },
    CONTRASENA: {
        type: DataTypes.TEXT
    },
    IMAGEN: {
        type: DataTypes.TEXT
    },
    BOLETA: {
        type: DataTypes.TEXT
    },
    PRIMER_INGRESO: {
        type: DataTypes.BOOLEAN
    },
    CORREO: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_ms_usuario', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = USERS;