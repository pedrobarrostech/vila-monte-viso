'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _entry = require('./entry.resource');

var _entry2 = _interopRequireDefault(_entry);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();
var jwtAuth = (0, _expressJwt2.default)({ secret: _env2.default.jwtSecret });

router.route('/:month/:year').get(jwtAuth, _entry2.default.getEntriesByMonthAndYear);

router.route('/:month/:year/positive').get(jwtAuth, _entry2.default.getPositiveEntriesByMonthAndYear);

router.route('/:month/:year/negative').get(jwtAuth, _entry2.default.getNegativeEntriesByMonthAndYear);

router.route('/:year/positive').get(jwtAuth, _entry2.default.getPositiveEntriesByYear);

router.route('/:year/negative').get(jwtAuth, _entry2.default.getNegativeEntriesByYear);

router.route('/:year').get(jwtAuth, _entry2.default.getEntriesByYear);

router.route('/:year/total').get(jwtAuth, _entry2.default.getTotalEntriesByYear);

router.route('/:month/:year/total').get(jwtAuth, _entry2.default.getTotalEntriesByMonthAndYear);

router.route('/:month/:year/positive/total').get(jwtAuth, _entry2.default.getTotalPositiveEntriesByMonthAndYear);

router.route('/:month/:year/negative/total').get(jwtAuth, _entry2.default.getTotalNegativeEntriesByMonthAndYear);

router.route('/:year/positive/total').get(jwtAuth, _entry2.default.getTotalPositiveEntriesByYear);

router.route('/:year/negative/total').get(jwtAuth, _entry2.default.getTotalNegativeEntriesByYear);

router.route('/:month/:year/count').get(jwtAuth, _entry2.default.getCountByMonthAndYear);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=entry.route.js.map
