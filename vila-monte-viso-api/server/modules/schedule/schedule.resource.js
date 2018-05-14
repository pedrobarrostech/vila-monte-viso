'use strict'

import sequelize from 'sequelize'
import models from '../../models/index'

async function getComments (req, res, next) {
  try {
    const data = await models.Schedule.findAll()
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getCountGroupedByYear (req, res, next) {
  try {
    const data = await models.Schedule
      .findAll({
        attributes: [
          [sequelize.fn('date_trunc', 'year', sequelize.col('start')), 'year'],
          [sequelize.fn('count', '*'), 'count']
        ],
        group: 'year'
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

export default {
  getComments,
  getCountGroupedByYear
}
