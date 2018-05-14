'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schedule = require('./schedule.resource');

var _schedule2 = _interopRequireDefault(_schedule);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();
var jwtAuth = (0, _expressJwt2.default)({ secret: _env2.default.jwtSecret });

router.route('/').get(jwtAuth, _schedule2.default.getComments);

router.route('/count-grouped-by-year').get(_schedule2.default.getCountGroupedByYear);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=schedule.route.js.map
