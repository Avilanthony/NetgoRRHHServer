const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');

const LOCALES = rrhhNetgo.define('tbl_ml_local', {
    ID_LOCAL: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    UBICACION: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_ml_local', timestamps: false
}); //DECLARANDO EL OBJETO

module.exports = LOCALES;