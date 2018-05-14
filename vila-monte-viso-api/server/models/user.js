'use strict'

function userSchema (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })

  return User
}

export default userSchema
