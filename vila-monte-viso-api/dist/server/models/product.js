'use strict';

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    active: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    link: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};
//# sourceMappingURL=product.js.map
