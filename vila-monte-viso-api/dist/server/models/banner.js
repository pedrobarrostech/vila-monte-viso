'use strict';

module.exports = function (sequelize, DataTypes) {
  var Banner = sequelize.define('Banner', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    order: DataTypes.INTEGER,
    active: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Banner;
};
//# sourceMappingURL=banner.js.map
