const {EntityManager} = require('../config/entity.manager');

class UserRepository {

  constructor () {
    this.user = EntityManager.applicationUser;
  }

  async findById (id, txn) {}
}