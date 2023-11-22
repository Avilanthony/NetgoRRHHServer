const {DataTypes} = require('sequelize');
const {ballenita} = require('../../database/database');

const TICKETS = ballenita.define('tbl_mt_ticket', {
    ID_TICKET: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ID_USUARIO: {
        type: DataTypes.INTEGER
    },
    ASUNTO: {
        type: DataTypes.STRING
    },
    DETALLE: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_mt_ticket', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = TICKETS;