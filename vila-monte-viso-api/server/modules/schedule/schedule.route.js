'use strict'

import scheduleResource from './schedule.resource'
import expressJwt from 'express-jwt'
import config from '../../config/env'
const router = require('express').Router()
const jwtAuth = expressJwt({ secret: config.jwtSecret })

router.route('/')
  .get(jwtAuth, scheduleResource.getComments)

router.route('/count-grouped-by-year')
  .get(scheduleResource.getCountGroupedByYear)

export default router
