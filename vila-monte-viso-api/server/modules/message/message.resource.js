'use strict'

import models from '../../models/index'

async function list (req, res, next) {
  try {
    const data = await models.Message.findAll({})
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
    const data = await models.Message
      .find({
        where: {
          id: req.params.messageId
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
    const data = await models.Message
      .find({
        where: {
          id: req.params.messageId
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
    const message = {
      title: req.body.title,
      subject: req.body.subject,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    }
    const data = await models.Message.create(message)
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
    const message = await models.Message
      .find({
        where: {
          id: req.params.messageId
        }
      })
    if (message) {
      const data = await message
        .updateAttributes({
          title: req.body.title,
          subject: req.body.subject,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message
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
    const data = await models.Message
      .destroy({
        where: {
          id: req.params.messageId
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
  remove
}
