'use strict'

module.exports = function (sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    subject: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Message
}
