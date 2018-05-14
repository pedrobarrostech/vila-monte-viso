'use strict'

import expressJwt from 'express-jwt'
import entryResource from './entry.resource'
import config from '../../config/env'
const router = require('express').Router()
const jwtAuth = expressJwt({ secret: config.jwtSecret })

router.route('/:month/:year')
  .get(jwtAuth, entryResource.getEntriesByMonthAndYear)

router.route('/:month/:year/positive')
  .get(jwtAuth, entryResource.getPositiveEntriesByMonthAndYear)

router.route('/:month/:year/negative')
  .get(jwtAuth, entryResource.getNegativeEntriesByMonthAndYear)

router.route('/:year/positive')
  .get(jwtAuth, entryResource.getPositiveEntriesByYear)

router.route('/:year/negative')
  .get(jwtAuth, entryResource.getNegativeEntriesByYear)

router.route('/:year')
  .get(jwtAuth, entryResource.getEntriesByYear)

router.route('/:year/total')
  .get(jwtAuth, entryResource.getTotalEntriesByYear)

router.route('/:month/:year/total')
  .get(jwtAuth, entryResource.getTotalEntriesByMonthAndYear)

router.route('/:month/:year/positive/total')
  .get(jwtAuth, entryResource.getTotalPositiveEntriesByMonthAndYear)

router.route('/:month/:year/negative/total')
  .get(jwtAuth, entryResource.getTotalNegativeEntriesByMonthAndYear)

router.route('/:year/positive/total')
  .get(jwtAuth, entryResource.getTotalPositiveEntriesByYear)

router.route('/:year/negative/total')
  .get(jwtAuth, entryResource.getTotalNegativeEntriesByYear)

router.route('/:month/:year/count')
  .get(jwtAuth, entryResource.getCountByMonthAndYear)

export default router
