'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _client = require('./client.resource');

var _client2 = _interopRequireDefault(_client);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();
var jwtAuth = (0, _expressJwt2.default)({ secret: _env2.default.jwtSecret });

router.route('/').get(jwtAuth, _client2.default.list).post(jwtAuth, (0, _expressValidation2.default)(_paramValidation2.default.createClient), _client2.default.create);

router.route('/:clientId').get(jwtAuth, _client2.default.get).put(jwtAuth, (0, _expressValidation2.default)(_paramValidation2.default.updateClient), _client2.default.update).delete(jwtAuth, _client2.default.remove);

router.route('/:clientId/schedules').post(jwtAuth, (0, _expressValidation2.default)(_paramValidation2.default.createSchedule), _client2.default.createSchedule).get(jwtAuth, _client2.default.getSchedulesByClientId);

router.route('/:clientId/schedules/:scheduleId').delete(jwtAuth, _client2.default.removeSchedule);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=client.route.js.map
