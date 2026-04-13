const {ObjectValidator} = require('../util/obj.validator');

class AuthRoute {

  constructor (fastify, basePath) {
    const routePath = 'auth';
    this.objVal = new ObjectValidator();

    fastify.post(`${basePath}/${routePath}`, this.signUp.bind(this));

    fastify.log.info(`Completed auth route initialization, available at ${basePath}/${routePath}`);
  }

  async signUp (req, res) {
    this.objVal.validate()
  }
}

exports.AuthRoute = AuthRoute;