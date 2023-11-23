const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');

const ROLES = rrhhNetgo.define('tbl_ms_rol', {
    ID_ROL: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ROL: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_ms_rol', timestamps: false
}); //DECLARANDO EL OBJETO

module.exports = ROLES;