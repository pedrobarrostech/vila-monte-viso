'use strict';

module.exports = function (sequelize, DataTypes) {
  var Section = sequelize.define('Section', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Section;
};
//# sourceMappingURL=section.js.map
