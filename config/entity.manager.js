const {ApplicationUserEntity} = require('../entity/user.entity');
const {ApplicationRoleEntity} = require('../entity/role.entity');
const {ApplicationPermissionEntity} = require('../entity/permission.entity');

const {SystemRoles} = require('../constants/system_roles');

class EntityManager {

  static initDatasource (fastify, sequelize) {
    const applicationUser = ApplicationUserEntity(sequelize);
    const applicationRole = ApplicationRoleEntity(sequelize);
    const applicationPermission = ApplicationPermissionEntity(sequelize);

    EntityManager.fastify = fastify;
    EntityManager.sequelize = sequelize;
    EntityManager.applicationUser = applicationUser;
    EntityManager.applicationRole = applicationRole;
    EntityManager.applicationPermission = applicationPermission;

    EntityManager.initRoles(applicationRole);
    EntityManager.setUserAuthority(applicationUser, applicationRole, applicationPermission);
  }

  static setUserAuthority (user, role, permission) {
    user.belongsToMany(role, { through: 'User_Roles' });
    role.belongsToMany(user, { through: 'User_Roles' });

    role.belongsToMany(permission, { through: 'Role_Permissions' });
    permission.belongsToMany(role, { through: 'Role_Permissions' });
  }

  static initRoles (applicationRole) {
    EntityManager.fastify.log.info(`Initializing application roles`)
    for (const role of SystemRoles) {
      applicationRole.findOrCreate({
        where: { name: role.name },
        defaults: role
      }).then(roleResp => {
        EntityManager.fastify.log.info(`Refreshed role ${roleResp}`);
      }).catch(err => {
        EntityManager.fastify.log.error('Unable to refresh role. Error ' +err)
      })
    }
  }
}

exports.EntityManager = EntityManager;