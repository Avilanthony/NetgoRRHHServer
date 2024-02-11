const { DataTypes } = require('sequelize');
const rrhhNetgo = require('../../database/database');
/* const DNI = require('../modulodni/dni'); */


const USERS = rrhhNetgo.define('tbl_ms_usuario', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    ID_ROL: {
        type: DataTypes.INTEGER
    },
    ID_DEPARTAMENTO: {
        type: DataTypes.INTEGER
    },
    ID_LOCAL: {
        type: DataTypes.INTEGER
    },
    USUARIO: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    TELEFONO: {
        type: DataTypes.STRING
    },
    VACACIONES: {
        type: DataTypes.INTEGER
    },
    PUBLIC_ID_IMG: {
        type: DataTypes.TEXT
    },
    PUBLIC_ID_PDF: {
        type: DataTypes.TEXT
    },
    TOKEN_DISPOSITIVO: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'tbl_ms_usuario',
    timestamps: false
}); //DECLARANDO EL OBJETO

// Definir la relación con DNI

/* USERS.belongsTo(DNI, { foreignKey: 'ID_USUARIO' }); */

module.exports = USERS;