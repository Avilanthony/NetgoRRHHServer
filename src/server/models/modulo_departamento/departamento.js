const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');

const DEPTOS = rrhhNetgo.define('tbl_md_departamento', {
    ID_DEPARTAMENTO: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ID_LOCAL: {
        type: DataTypes.INTEGER
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
},{
    tableName: 'tbl_md_departamento', timestamps: true
}); //DECLARANDO EL OBJETO

module.exports = DEPTOS;