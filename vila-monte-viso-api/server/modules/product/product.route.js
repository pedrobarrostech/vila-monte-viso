'use strict'

import productResource from './product.resource'
const router = require('express').Router()

router.route('/')
  .get(productResource.list)
  .post(productResource.create)

router.route('/active')
  .get(productResource.listActives)

router.route('/:productId')
  .get(productResource.get)
  .put(productResource.update)
  .delete(productResource.remove)

export default router
