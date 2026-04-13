const { EntityManager } = require('../config/entity.manager');

class HealthRoute {

  constructor (fastify, path) {
    this.sequelize = EntityManager.sequelize;

    const routePath = '/health'
    fastify.get(`${path}${routePath}`, this.getApplicationHealth.bind(this));

    fastify.log.info(`Completed health route initialization, available at ${path}${routePath}`);
  }

  async getApplicationHealth (req, res) {
    return res.send({ status: 'OK' });
  }
}

exports.HealthRoute = HealthRoute;