'use strict'

import bannerResource from './banner.resource'
const router = require('express').Router()

router.route('/')
  .get(bannerResource.list)
  .post(bannerResource.create)

router.route('/active')
  .get(bannerResource.listActives)

router.route('/:bannerId')
  .get(bannerResource.get)
  .put(bannerResource.update)
  .delete(bannerResource.remove)

export default router
