'use strict'

import jwt from 'jsonwebtoken'
import config from '../../config/env'
import models from '../../models/index'

async function login (req, res, next) {
  try {
    const data = await models.User.find({
      where: {
        username: req.body.username
      }
    })

    if (data != null && req.body.password === data.password) {
      const token = jwt.sign({
        username: data.username
      }, config.jwtSecret)
      return res.json({
        token,
        username: data.username
      })
    }

    return res.json({
      success: false
    })
  } catch (err) {
    next(err)
  }
}

function getRandomNumber (req, res) {
  return res.json({
    user: req.user,
    num: Math.random() * 100
  })
}

export default {
  login,
  getRandomNumber
}
