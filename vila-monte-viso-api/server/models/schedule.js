function scheduleSchema (sequelize, DataTypes) {
  const Schedule = sequelize.define('Schedule', {
    title: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    price: DataTypes.FLOAT
  })

  Schedule.hasOne(sequelize.models.Client, { foreignKey: 'id' })
  return Schedule
}

export default scheduleSchema
