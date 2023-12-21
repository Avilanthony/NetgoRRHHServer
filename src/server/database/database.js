const { Sequelize } = require('sequelize');

const rrhhNetgo = new Sequelize({
  host: 'rrhhnetgo-pruebas.cvhq4rmcypqh.us-east-2.rds.amazonaws.com',
  database: 'rrhh_netgo',
  username: 'admin',
  password: 'rootNetgoServer',
  dialect: 'mysql',
});

rrhhNetgo.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = rrhhNetgo;
