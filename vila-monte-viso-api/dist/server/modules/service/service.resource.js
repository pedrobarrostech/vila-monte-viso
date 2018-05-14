'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var listActives = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index2.default.Service.findAll({
              where: {
                active: 1
              },
              limit: 3
            });

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

  return function listActives(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var list = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index2.default.Service.findAll({});

          case 3:
            data = _context2.sent;

            res.json({
              success: true,
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

  return function list(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var get = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index2.default.Service.find({
              where: {
                id: req.params.serviceId
              }
            });

          case 3:
            data = _context3.sent;

            res.json({
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

  return function get(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var load = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next, id) {
    var data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index2.default.Service.find({
              where: {
                id: req.params.serviceId
              }
            });

          case 3:
            data = _context4.sent;

            res.json({
              success: true,
              data: data
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            next(_context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function load(_x10, _x11, _x12, _x13) {
    return _ref4.apply(this, arguments);
  };
}();

var create = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var imageSrc, generatedId, service, data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            imageSrc = null;

            if (!req.body.image) {
              _context5.next = 7;
              break;
            }

            generatedId = (0, _image.generateId)();

            imageSrc = 'uploads/thumbs/' + generatedId + req.body.image.filename;
            _context5.next = 7;
            return (0, _image.saveResizeImage)(req.body.image.value, req.body.image.filename, generatedId);

          case 7:
            service = {
              name: req.body.name,
              image: imageSrc,
              description: req.body.description,
              active: req.body.active
            };
            _context5.next = 10;
            return _index2.default.Service.create(service);

          case 10:
            data = _context5.sent;

            res.json({
              success: true,
              data: data
            });
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5['catch'](0);

            next(_context5.t0);

          case 17:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 14]]);
  }));

  return function create(_x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}();

var update = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
    var service, generatedId, data;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index2.default.Service.find({
              where: {
                id: req.params.serviceId
              }
            });

          case 3:
            service = _context6.sent;

            if (!service) {
              _context6.next = 13;
              break;
            }

            if (!req.body.image) {
              _context6.next = 9;
              break;
            }

            generatedId = (0, _image.generateId)();
            _context6.next = 9;
            return (0, _image.saveResizeImage)(req.body.image.value, req.body.image.filename, generatedId);

          case 9:
            _context6.next = 11;
            return service.updateAttributes({
              name: req.body.name,
              description: req.body.description,
              active: req.body.active
            });

          case 11:
            data = _context6.sent;


            res.json({
              success: true,
              data: data
            });

          case 13:
            _context6.next = 18;
            break;

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6['catch'](0);

            next(_context6.t0);

          case 18:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 15]]);
  }));

  return function update(_x17, _x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res, next) {
    var product, data;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index2.default.Service.find({
              where: {
                id: req.params.serviceId
              }
            });

          case 3:
            product = _context7.sent;
            _context7.next = 6;
            return _index2.default.Service.destroy({
              where: {
                id: req.params.serviceId
              }
            });

          case 6:
            data = _context7.sent;


            (0, _image.deleteImage)(product.image);

            res.json({
              success: true,
              data: data
            });
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7['catch'](0);

            next(_context7.t0);

          case 14:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 11]]);
  }));

  return function remove(_x20, _x21, _x22) {
    return _ref7.apply(this, arguments);
  };
}();

var _image = require('../../helpers/image.helper');

var _index = require('../../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  listActives: listActives,
  load: load,
  list: list,
  get: get,
  create: create,
  update: update,
  remove: remove
};
module.exports = exports['default'];
//# sourceMappingURL=service.resource.js.map
