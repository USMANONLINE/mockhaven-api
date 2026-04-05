const ServerConfig = require('./config/server.config');

new ServerConfig()
  .startApplication(8080);