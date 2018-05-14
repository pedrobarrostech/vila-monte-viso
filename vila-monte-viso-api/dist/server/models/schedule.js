'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function scheduleSchema(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    title: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    price: DataTypes.FLOAT
  });

  Schedule.hasOne(sequelize.models.Client, { foreignKey: 'id' });
  return Schedule;
}

exports.default = scheduleSchema;
module.exports = exports['default'];
//# sourceMappingURL=schedule.js.map
