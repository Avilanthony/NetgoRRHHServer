const {DataTypes} = require('sequelize');
const rrhhNetgo = require('../../../database/database');

const ViewDatosBoleta = rrhhNetgo.define(`view_boleta`,{
    ID: {
        type: DataTypes.INTEGER
    },
    PRIMER_NOMBRE: {
        type: DataTypes.STRING
    },
    PRIMER_APELLIDO: {
        type: DataTypes.STRING
    },
    ID_DNI: {
        type: DataTypes.INTEGER
    },
    DNI: {
        type: DataTypes.STRING
    },
    NOMBRE_COMPLETO: {
        type: DataTypes.STRING
    },
    FECHA_INGRESO: {
        type: DataTypes.STRING
    },
    PUESTO: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    FECHA_QUINCENA: {
        type: DataTypes.STRING
    },
    SUELDO_MENSUAL: {
        type: DataTypes.DOUBLE
    },
    SUELDO_QUINCENAL: {
        type: DataTypes.DOUBLE
    },
    DIAS_TRABAJADOS: {
        type: DataTypes.DOUBLE
    },
    SUELDO_DEVENGADO: {
        type: DataTypes.DOUBLE
    },
    OTROS_INGRESOS: {
        type: DataTypes.DOUBLE
    },
    BONIFICACION: {
        type: DataTypes.DOUBLE
    },
    TOTAL_INGRESOS: {
        type: DataTypes.DOUBLE
    },
    IHSS: {
        type: DataTypes.DOUBLE
    },
    ISR: {
        type: DataTypes.DOUBLE
    },
    INCAPACIDAD: {
        type: DataTypes.DOUBLE
    },
    PRESTAMOS_EMPLEADOS: {
        type: DataTypes.DOUBLE
    },
    VIATICOS_NO_LIQUIDADOS: {
        type: DataTypes.DOUBLE
    },
    LIQUIDACION_VIA_VENCIDA: {
        type: DataTypes.DOUBLE
    },
    REPOSTERIA: {
        type: DataTypes.DOUBLE
    },
    APARATO_TELEFONICO: {
        type: DataTypes.DOUBLE
    },
    BANCO_FICENSA_PRESTAMO: {
        type: DataTypes.DOUBLE
    },
    SEGURO_MEDICO_DEP: {
        type: DataTypes.DOUBLE
    },
    IMPUESTO_VECINAL: {
        type: DataTypes.DOUBLE
    },
    GO_CREDITO_AHORRO: {
        type: DataTypes.DOUBLE
    },
    MI_OPTICA: {
        type: DataTypes.DOUBLE
    },
    OTRAS_DEDUCCIONES: {
        type: DataTypes.DOUBLE
    },
    CARNET: {
        type: DataTypes.DOUBLE
    },
    PLAN_TELEFONICO: {
        type: DataTypes.DOUBLE
    },
    CREDI_LEE: {
        type: DataTypes.DOUBLE
    },
    FARMACIAS: {
        type: DataTypes.DOUBLE
    },
    BANCO_ATLANTIDA_PRESTAMO: {
        type: DataTypes.DOUBLE
    },
    TOTAL_DEDUCCIONES: {
        type: DataTypes.DOUBLE
    },
    VALOR_NETO: {
        type: DataTypes.DOUBLE
    },
}, {
    tableName: 'view_boleta',
    timestamps: false
})

//Para exportar el modelo
module.exports = ViewDatosBoleta;