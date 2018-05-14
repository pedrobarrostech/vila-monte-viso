'use strict'

import expressJwt from 'express-jwt'
import userResource from './user.resource'
import config from '../../config/env'
const router = require('express').Router()
const jwtAuth = expressJwt({ secret: config.jwtSecret })

router.route('/')
  .get(jwtAuth, userResource.list)
  .post(userResource.create)

router.route('/:userId')
  .get(jwtAuth, userResource.get)
  .put(jwtAuth, userResource.update)
  .delete(jwtAuth, userResource.remove)

export default router
