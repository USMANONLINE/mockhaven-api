const configProperties = require('./properties.json');

exports.configProperties = {
  application: {
    name: configProperties.application.name || 'Mockhaven',
    port: configProperties.application.port || 8080,
    path: configProperties.application.path || '/api',
    isProduction: configProperties.application.isProduction || false,
  },
  datasource: {
    name: configProperties.datasource.name || 'mockhaven-datastore',
    host: configProperties.datasource.host || 'localhost',
    port: configProperties.datasource.port || 5432,
    dialect: configProperties.datasource.dialect || 'postgres',
    username: configProperties.datasource.username || 'postgres',
    password: configProperties.datasource.password || 'postgres',
  }
}