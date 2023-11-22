const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const DNI = ballenita.define('tbl_md_dni_usuario', {
    ID_DNI: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    DNI: {
        type: DataTypes.INTEGER
    },
    IMAGEN: {
        type: DataTypes.TEXT
    },
    ID_USUARIO: {
        type: DataTypes.INTEGER
    },
},{
    tableName: 'tbl_md_dni_usuario', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = DNI;