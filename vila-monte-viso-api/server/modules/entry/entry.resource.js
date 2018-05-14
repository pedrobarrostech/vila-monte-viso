'use strict'

import sequelize from 'sequelize'
import models from '../../models/index'

async function getEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .sum('price', {
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalPositiveEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .sum('price', {
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $gte: 0
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getPositiveEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $gte: 0
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalNegativeEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .sum('price', {
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $lt: 0
          }

        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getNegativeEntriesByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $lt: 0
          }

        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getEntriesByYear (req, res, next) {
  const firstDay = new Date(req.params.year, 0, 1)
  const lastDay = new Date(req.params.year, 11, 31)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalEntriesByYear (req, res, next) {
  const firstDay = new Date(2017, 0, 1)
  const lastDay = new Date(2017, 11, 31)

  try {
    const data = await models.Schedule
      .sum('price', {
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getPositiveEntriesByYear (req, res, next) {
  const firstDay = new Date(req.params.year, 0, 1)
  const lastDay = new Date(req.params.year, 11, 31)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $gte: 0
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalPositiveEntriesByYear (req, res, next) {
  // const firstDay = new Date(req.params.year, 0, 1)
  // const lastDay = new Date(req.params.year, 11, 31)

  res.json({
    success: true
  })
  /*
  try {
      const data = await models.Schedule
                      .sum('price', {
                              where: {
                                      start: {
                                          $gte: firstDay
                                      },
                                      end: {
                                          $lte: lastDay
                                      },
                                      price: {
                                          $gte: 0
                                      }
                                  }
                              })
      res.json({success: true, data})
  } catch (err) {
      next(err)
  } */
}

async function getNegativeEntriesByYear (req, res, next) {
  const firstDay = new Date(req.params.year, 0, 1)
  const lastDay = new Date(req.params.year, 11, 31)

  try {
    const data = await models.Schedule
      .findAll({
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $lt: 0
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getTotalNegativeEntriesByYear (req, res, next) {
  const firstDay = new Date(req.params.year, 0, 1)
  const lastDay = new Date(req.params.year, 11, 31)

  try {
    const data = await models.Schedule
      .sum('price', {
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          },
          price: {
            $lt: 0
          }
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function getCountByMonthAndYear (req, res, next) {
  const date = new Date(req.params.year + '-' + req.params.month + '-' + '24')
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  try {
    const data = await models.Schedule
      .findAll({
        attributes: [
          [sequelize.fn('date_trunc', 'month', sequelize.col('start')), 'month'],
          [sequelize.fn('count', '*'), 'count']
        ],
        group: 'month',
        where: {
          start: {
            $gte: firstDay
          },
          end: {
            $lte: lastDay
          }
        }
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
  getEntriesByMonthAndYear,
  getEntriesByYear,
  getNegativeEntriesByMonthAndYear,
  getPositiveEntriesByMonthAndYear,
  getPositiveEntriesByYear,
  getNegativeEntriesByYear,
  getTotalEntriesByMonthAndYear,
  getTotalNegativeEntriesByMonthAndYear,
  getTotalPositiveEntriesByMonthAndYear,
  getTotalEntriesByYear,
  getTotalNegativeEntriesByYear,
  getTotalPositiveEntriesByYear,
  getCountByMonthAndYear
}
