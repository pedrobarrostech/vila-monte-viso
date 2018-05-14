'use strict'

import serviceResource from './service.resource'
const router = require('express').Router()

router.route('/')
  .get(serviceResource.list)
  .post(serviceResource.create)

router.route('/active')
  .get(serviceResource.listActives)

router.route('/:serviceId')
  .get(serviceResource.get)
  .put(serviceResource.update)
  .delete(serviceResource.remove)

export default router
