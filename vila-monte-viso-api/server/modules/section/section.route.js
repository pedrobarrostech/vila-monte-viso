'use strict'

import sectionResource from './section.resource'
const router = require('express').Router()

router.route('/')
  .get(sectionResource.list)
  .post(sectionResource.create)

router.route('/:sectionId')
  .get(sectionResource.get)
  .put(sectionResource.update)
  .delete(sectionResource.remove)

export default router
