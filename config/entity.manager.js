const {ApplicationUserEntity} = require('../entity/user.entity');

class EntityManager {

  static initDatasource (sequelize) {
    EntityManager.sequelize = sequelize;
    EntityManager.applicationUser = ApplicationUserEntity(sequelize);
  }
}

exports.EntityManager = EntityManager;