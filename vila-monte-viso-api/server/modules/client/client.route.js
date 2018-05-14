'use strict'

import expressJwt from 'express-jwt'
import validate from 'express-validation'
import clientResource from './client.resource'
import config from '../../config/env'
import paramValidation from '../../config/param-validation'
const router = require('express').Router()
const jwtAuth = expressJwt({ secret: config.jwtSecret })

router.route('/')
  .get(jwtAuth, clientResource.list)
  .post(jwtAuth, validate(paramValidation.createClient), clientResource.create)

router.route('/:clientId')
  .get(jwtAuth, clientResource.get)
  .put(jwtAuth, validate(paramValidation.updateClient), clientResource.update)
  .delete(jwtAuth, clientResource.remove)

router.route('/:clientId/schedules')
  .post(jwtAuth, validate(paramValidation.createSchedule), clientResource.createSchedule)
  .get(jwtAuth, clientResource.getSchedulesByClientId)

router.route('/:clientId/schedules/:scheduleId')
  .delete(jwtAuth, clientResource.removeSchedule)

export default router
