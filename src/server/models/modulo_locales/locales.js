const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const LOCALES = ballenita.define('tbl_ml_local', {
    ID_LOCAL: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    UBICACION: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_ml_local', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = LOCALES;