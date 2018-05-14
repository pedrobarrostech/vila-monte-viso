'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var login = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var data, token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index2.default.User.find({
              where: {
                username: req.body.username
              }
            });

          case 3:
            data = _context.sent;

            if (!(data != null && req.body.password === data.password)) {
              _context.next = 7;
              break;
            }

            token = _jsonwebtoken2.default.sign({
              username: data.username
            }, _env2.default.jwtSecret);
            return _context.abrupt('return', res.json({
              token: token,
              username: data.username
            }));

          case 7:
            return _context.abrupt('return', res.json({
              success: false
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);

            next(_context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

var _index = require('../../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRandomNumber(req, res) {
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

exports.default = {
  login: login,
  getRandomNumber: getRandomNumber
};
module.exports = exports['default'];
//# sourceMappingURL=auth.resource.js.map
