'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _user = require('./user.resource');

var _user2 = _interopRequireDefault(_user);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();
var jwtAuth = (0, _expressJwt2.default)({ secret: _env2.default.jwtSecret });

router.route('/').get(jwtAuth, _user2.default.list).post(_user2.default.create);

router.route('/:userId').get(jwtAuth, _user2.default.get).put(jwtAuth, _user2.default.update).delete(jwtAuth, _user2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=user.route.js.map
