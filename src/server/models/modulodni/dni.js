const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../database/database');
/* const USERS = require('../../models/modulo_seguridad/usuario'); */

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
        type: DataTypes.INTEGER/* ,
        primaryKey: true */
    },
    PUBLIC_ID_DNI: {
        type: DataTypes.TEXT
    },
},{
    tableName: 'tbl_md_dni_usuario', timestamps: false
}); //DECLARANDO EL OBJETO

/* DNI.belongsTo(USERS, { foreignKey: 'ID_USUARIO' }); */

module.exports = DNI;