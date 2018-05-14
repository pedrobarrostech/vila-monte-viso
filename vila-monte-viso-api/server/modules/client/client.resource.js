'use strict'

import models from '../../models/index'

async function list (req, res, next) {
  try {
    const data = await models.Client.findAll({})
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function get (req, res, next) {
  try {
    const data = await models.Client
      .find({
        where: {
          id: req.params.clientId
        }
      })
    res.json({
      data
    })
  } catch (err) {
    next(err)
  }
}

async function load (req, res, next, id) {
  try {
    const data = await models.Client
      .find({
        where: {
          id: req.params.clientId
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

async function create (req, res, next) {
  try {
    const client = {
      name: req.body.name,
      lastName: req.body.lastName,
      rg: req.body.rg,
      cpf: req.body.name,
      maritalStatus: req.body.maritalStatus,
      sex: req.body.sex,
      address: req.body.address,
      city: req.body.name,
      state: req.body.state,
      phone: req.body.phone,
      facebook: req.body.facebook,
      email: req.body.email,
      birthday: req.body.birthday,
      info: req.body.info
    }
    const data = await models.Client.create(client)
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function update (req, res, next) {
  try {
    const client = await models.Client
      .find({
        where: {
          id: req.params.clientId
        }
      })
    if (client) {
      const data = await client
        .updateAttributes({
          name: req.body.name,
          lastName: req.body.lastName,
          rg: req.body.rg,
          cpf: req.body.cpf,
          maritalStatus: req.body.maritalStatus,
          sex: req.body.sex,
          city: req.body.city,
          state: req.body.state,
          phone: req.body.phone,
          facebook: req.body.facebook,
          email: req.body.email,
          birthday: req.body.birthday,
          info: req.body.info
        })
      res.json({
        success: true,
        data
      })
    }
  } catch (err) {
    next(err)
  }
}

async function remove (req, res, next) {
  try {
    const data = await models.Client
      .destroy({
        where: {
          id: req.params.clientId
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

async function getSchedulesByClientId (req, res, next) {
  try {
    const data = await models.Schedule
      .findAll({
        where: {
          clientId: req.params.clientId
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

async function createSchedule (req, res, next) {
  try {
    const schedule = {
      title: req.body.title,
      clientId: req.params.clientId,
      start: req.body.start,
      end: req.body.end,
      price: req.body.price
    }

    const data = await models.Schedule.create(schedule)
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function removeSchedule (req, res, next) {
  try {
    const data = await models.Schedule
      .destroy({
        where: {
          id: req.params.scheduleId
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
  load,
  list,
  get,
  create,
  update,
  remove,
  removeSchedule,
  createSchedule,
  getSchedulesByClientId
}
