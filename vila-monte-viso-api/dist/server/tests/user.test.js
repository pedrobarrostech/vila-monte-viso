'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global it, describe */
_chai2.default.config.includeStack = true;

describe('## User APIs', function () {
  var user = {
    id: '',
    username: 'fulano',
    password: '1234567890'
  };

  describe('# POST /apiv1/users', function () {
    it('should create a new user', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _supertestAsPromised2.default)(_index2.default).post('/apiv1/users').set('content-type', 'application/json').send(user);

            case 2:
              res = _context.sent;


              user.id = res.body.data.id;
              (0, _chai.expect)(res.body.data.username).to.equal(user.username);
              (0, _chai.expect)(_httpStatus2.default.OK);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });

  describe('# GET /apiv1/users/:userId', function () {
    it('should get user details', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _supertestAsPromised2.default)(_index2.default).get('/apiv1/users/' + user.id).set('content-type', 'application/json');

            case 2:
              res = _context2.sent;


              (0, _chai.expect)(res.body.data.username).to.equal(user.username);
              (0, _chai.expect)(_httpStatus2.default.OK);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })));

    it('should report error with message - Not found, when user does not exists', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var res;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _supertestAsPromised2.default)(_index2.default).get('/apiv1/users/0').set('content-type', 'application/json');

            case 2:
              res = _context3.sent;


              (0, _chai.expect)(res.body.data).to.equal(null);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    })));
  });

  describe('# PUT /apiv1/users/:userId', function () {
    it('should update user details', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var userEdit, res;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userEdit = {};

              userEdit.username = 'kk';
              userEdit.password = 'kk';

              _context4.next = 5;
              return (0, _supertestAsPromised2.default)(_index2.default).put('/apiv1/users/' + user.id).set('content-type', 'application/json').send(userEdit);

            case 5:
              res = _context4.sent;


              (0, _chai.expect)(res.body.data.username).to.equal('kk');
              (0, _chai.expect)(_httpStatus2.default.OK);

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    })));
  });

  describe('# GET /apiv1/users/', function () {
    it('should get all users', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var res;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _supertestAsPromised2.default)(_index2.default).get('/apiv1/users').set('content-type', 'application/json');

            case 2:
              res = _context5.sent;


              (0, _chai.expect)(res.body.data).to.be.an('array');

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    })));
  });

  describe('# DELETE /apiv1/users/', function () {
    it('should delete user', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var res;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _supertestAsPromised2.default)(_index2.default).delete('/apiv1/users/' + user.id).set('content-type', 'application/json');

            case 2:
              res = _context6.sent;


              (0, _chai.expect)(res.body.success).to.equal(true);
              (0, _chai.expect)(_httpStatus2.default.OK);

            case 5:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    })));
  });
});
//# sourceMappingURL=user.test.js.map
