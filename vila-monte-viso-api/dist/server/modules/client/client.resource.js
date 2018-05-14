'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var list = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index2.default.Client.findAll({});

          case 3:
            data = _context.sent;

            res.json({
              success: true,
              data: data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            next(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function list(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var get = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index2.default.Client.find({
              where: {
                id: req.params.clientId
              }
            });

          case 3:
            data = _context2.sent;

            res.json({
              data: data
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            next(_context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function get(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var load = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next, id) {
    var data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index2.default.Client.find({
              where: {
                id: req.params.clientId
              }
            });

          case 3:
            data = _context3.sent;

            res.json({
              success: true,
              data: data
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            next(_context3.t0);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function load(_x7, _x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

var create = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var client, data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            client = {
              name: req.body.name,
              lastName: req.body.lastName,
              rg: req.body.rg,
              cpf: req.body.name,
              maritalStatus: req.body.maritalStatus,
              sex: req.body.sex,
              address: req.body.address,
              city: req.body.name,
              state: req.body.state,
              phone: req.body.phone,
              facebook: req.body.facebook,
              email: req.body.email,
              birthday: req.body.birthday,
              info: req.body.info
            };
            _context4.next = 4;
            return _index2.default.Client.create(client);

          case 4:
            data = _context4.sent;

            res.json({
              success: true,
              data: data
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](0);

            next(_context4.t0);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 8]]);
  }));

  return function create(_x11, _x12, _x13) {
    return _ref4.apply(this, arguments);
  };
}();

var update = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var client, data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index2.default.Client.find({
              where: {
                id: req.params.clientId
              }
            });

          case 3:
            client = _context5.sent;

            if (!client) {
              _context5.next = 9;
              break;
            }

            _context5.next = 7;
            return client.updateAttributes({
              name: req.body.name,
              lastName: req.body.lastName,
              rg: req.body.rg,
              cpf: req.body.cpf,
              maritalStatus: req.body.maritalStatus,
              sex: req.body.sex,
              city: req.body.city,
              state: req.body.state,
              phone: req.body.phone,
              facebook: req.body.facebook,
              email: req.body.email,
              birthday: req.body.birthday,
              info: req.body.info
            });

          case 7:
            data = _context5.sent;

            res.json({
              success: true,
              data: data
            });

          case 9:
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5['catch'](0);

            next(_context5.t0);

          case 14:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 11]]);
  }));

  return function update(_x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index2.default.Client.destroy({
              where: {
                id: req.params.clientId
              }
            });

          case 3:
            data = _context6.sent;

            res.json({
              success: true,
              data: data
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);

            next(_context6.t0);

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 7]]);
  }));

  return function remove(_x17, _x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}();

var getSchedulesByClientId = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index2.default.Schedule.findAll({
              where: {
                clientId: req.params.clientId
              }
            });

          case 3:
            data = _context7.sent;

            res.json({
              success: true,
              data: data
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);

            next(_context7.t0);

          case 10:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 7]]);
  }));

  return function getSchedulesByClientId(_x20, _x21, _x22) {
    return _ref7.apply(this, arguments);
  };
}();

var createSchedule = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res, next) {
    var schedule, data;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            schedule = {
              title: req.body.title,
              clientId: req.params.clientId,
              start: req.body.start,
              end: req.body.end,
              price: req.body.price
            };
            _context8.next = 4;
            return _index2.default.Schedule.create(schedule);

          case 4:
            data = _context8.sent;

            res.json({
              success: true,
              data: data
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8['catch'](0);

            next(_context8.t0);

          case 11:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this, [[0, 8]]);
  }));

  return function createSchedule(_x23, _x24, _x25) {
    return _ref8.apply(this, arguments);
  };
}();

var removeSchedule = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index2.default.Schedule.destroy({
              where: {
                id: req.params.scheduleId
              }
            });

          case 3:
            data = _context9.sent;

            res.json({
              success: true,
              data: data
            });
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9['catch'](0);

            next(_context9.t0);

          case 10:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this, [[0, 7]]);
  }));

  return function removeSchedule(_x26, _x27, _x28) {
    return _ref9.apply(this, arguments);
  };
}();

var _index = require('../../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  load: load,
  list: list,
  get: get,
  create: create,
  update: update,
  remove: remove,
  removeSchedule: removeSchedule,
  createSchedule: createSchedule,
  getSchedulesByClientId: getSchedulesByClientId
};
module.exports = exports['default'];
//# sourceMappingURL=client.resource.js.map
