'use strict'

import expressJwt from 'express-jwt'
import authResource from './auth.resource'
import config from '../../config/env'
const router = require('express').Router()

router.route('/login').post(authResource.login)
router.route('/random-number').get(expressJwt({ secret: config.jwtSecret }), authResource.getRandomNumber)

export default router
