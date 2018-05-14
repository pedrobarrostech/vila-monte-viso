'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function userSchema(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
}

exports.default = userSchema;
module.exports = exports['default'];
//# sourceMappingURL=user.js.map
