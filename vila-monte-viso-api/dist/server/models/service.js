'use strict';

module.exports = function (sequelize, DataTypes) {
  var Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    active: DataTypes.INTEGER,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Service;
};
//# sourceMappingURL=service.js.map
