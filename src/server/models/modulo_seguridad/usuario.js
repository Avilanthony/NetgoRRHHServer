const { DataTypes } = require('sequelize');
const rrhhNetgo = require('../../database/database');


const USERS = rrhhNetgo.define('tbl_ms_usuario', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    ID_ROL: {
        type: DataTypes.INTEGER
    },
    ID_DEPARTAMENTO: {
        type: DataTypes.INTEGER
    },
    USUARIO: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.STRING
    },
    CONTRASENA: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
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
}, {
    tableName: 'tbl_ms_usuario',
    timestamps: false
}); //DECLARANDO EL OBJETO

module.exports = USERS;