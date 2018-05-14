'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _auth = require('./auth.resource');

var _auth2 = _interopRequireDefault(_auth);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/login').post(_auth2.default.login);
router.route('/random-number').get((0, _expressJwt2.default)({ secret: _env2.default.jwtSecret }), _auth2.default.getRandomNumber);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.route.js.map
