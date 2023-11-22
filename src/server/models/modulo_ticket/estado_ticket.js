const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const ESTADOSTICKETS = ballenita.define('tbl_mt_estado_ticket', {
    ID_ESTADO: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ID_TICKET: {
        type: DataTypes.INTEGER
    },
    ESTADO: {
        type: DataTypes.BOOLEAN
    },
},{
    tableName: 'tbl_mt_estado_ticket', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = ESTADOSTICKETS;