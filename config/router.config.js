const {HealthRoute} = require('../route/health.route');

exports.initRoutes = function (fastify, path) {
  fastify.log.info(`Initializing application routes. Configured base path ${path}`);
  new HealthRoute(fastify, path);
}