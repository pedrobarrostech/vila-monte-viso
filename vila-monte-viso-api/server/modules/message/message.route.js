'use strict'

import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import messageResource from './message.resource'
const router = require('express').Router()

router.route('/')
  .get(messageResource.list)
  .post(validate(paramValidation.createMessage), messageResource.create)

router.route('/:messageId')
  .get(messageResource.get)
  .put(validate(paramValidation.updateMessage), messageResource.update)
  .delete(messageResource.remove)

export default router
