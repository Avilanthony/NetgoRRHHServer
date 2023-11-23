const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');

const DNI = rrhhNetgo.define('tbl_md_dni_usuario', {
    ID_DNI: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    DNI: {
        type: DataTypes.STRING
    },
    IMAGEN: {
        type: DataTypes.TEXT
    },
    ID_USUARIO: {
        type: DataTypes.INTEGER
    },
},{
    tableName: 'tbl_md_dni_usuario', timestamps: false
}); //DECLARANDO EL OBJETO

module.exports = DNI;