const {HealthRoute} = require('../route/health.route');
const {AuthRoute} = require('../route/auth.route');

exports.initRoutes = function (fastify, path) {
  fastify.log.info(`Initializing application routes. Configured base path ${path}`);
  new HealthRoute(fastify, path);
  new AuthRoute(fastify, path);
}