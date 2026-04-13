const { Sequelize } = require('sequelize');
const EntityManger = require('./entity.manager');
const { configProperties} = require('../config/config.properties');

exports.sequelize = function (fastify) {
  const datasourceProps = configProperties.datasource;
  const sequelize = new Sequelize(
    datasourceProps.name, datasourceProps.username, datasourceProps.password,
    { host: datasourceProps.host, dialect: datasourceProps.dialect, logging: false }
  );

  EntityManger.EntityManager.initDatasource(fastify, sequelize)
  return sequelize;
}