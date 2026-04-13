const fastify = require('fastify')({
  logger: true
});
const { sequelize } = require('../config/datasource.config');
const { configProperties} = require('../config/config.properties');
const RouterConfig = require('./router.config');

class ServerConfig {

  constructor () {
    this.applicationProps = configProperties.application;

    // Datastore Config
    this.sequelize = sequelize(fastify);
    this.initDatastore(this.applicationProps.isProduction);

    RouterConfig.initRoutes(fastify, this.applicationProps.path);
  }

  initDatastore (alter) {
    this.sequelize.sync({ alter }).then(resp => {
      fastify.log.info(`Entities updated completed successfully !`);
    }).catch(err => {
      fastify.log.error(err);
    })
  }

  startApplication () {
    fastify.listen({ port: this.applicationProps.port }, function (err, address) {
      if (err) {
        this.fastify.log.error(err);
        process.exit(1);
      }
    });
  }
}

module.exports = ServerConfig;