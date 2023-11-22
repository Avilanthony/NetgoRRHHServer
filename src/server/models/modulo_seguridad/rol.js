const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const ROLES = ballenita.define('tbl_ms_rol', {
    ID_ROL: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ROL: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_ms_rol', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = ROLES;