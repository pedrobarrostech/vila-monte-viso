'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getEntriesByMonthAndYear = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context.prev = 3;
            _context.next = 6;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                }
              }
            });

          case 6:
            data = _context.sent;

            res.json({
              success: true,
              data: data
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](3);

            next(_context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  return function getEntriesByMonthAndYear(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var getTotalEntriesByMonthAndYear = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context2.prev = 3;
            _context2.next = 6;
            return _index2.default.Schedule.sum('price', {
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                }
              }
            });

          case 6:
            data = _context2.sent;

            res.json({
              success: true,
              data: data
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](3);

            next(_context2.t0);

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 10]]);
  }));

  return function getTotalEntriesByMonthAndYear(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var getTotalPositiveEntriesByMonthAndYear = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context3.prev = 3;
            _context3.next = 6;
            return _index2.default.Schedule.sum('price', {
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $gte: 0
                }
              }
            });

          case 6:
            data = _context3.sent;

            res.json({
              success: true,
              data: data
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](3);

            next(_context3.t0);

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[3, 10]]);
  }));

  return function getTotalPositiveEntriesByMonthAndYear(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var getPositiveEntriesByMonthAndYear = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context4.prev = 3;
            _context4.next = 6;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $gte: 0
                }
              }
            });

          case 6:
            data = _context4.sent;

            res.json({
              success: true,
              data: data
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4['catch'](3);

            next(_context4.t0);

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[3, 10]]);
  }));

  return function getPositiveEntriesByMonthAndYear(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var getTotalNegativeEntriesByMonthAndYear = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context5.prev = 3;
            _context5.next = 6;
            return _index2.default.Schedule.sum('price', {
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $lt: 0
                }

              }
            });

          case 6:
            data = _context5.sent;

            res.json({
              success: true,
              data: data
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5['catch'](3);

            next(_context5.t0);

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[3, 10]]);
  }));

  return function getTotalNegativeEntriesByMonthAndYear(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

var getNegativeEntriesByMonthAndYear = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context6.prev = 3;
            _context6.next = 6;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $lt: 0
                }

              }
            });

          case 6:
            data = _context6.sent;

            res.json({
              success: true,
              data: data
            });
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6['catch'](3);

            next(_context6.t0);

          case 13:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[3, 10]]);
  }));

  return function getNegativeEntriesByMonthAndYear(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

var getEntriesByYear = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res, next) {
    var firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            firstDay = new Date(req.params.year, 0, 1);
            lastDay = new Date(req.params.year, 11, 31);
            _context7.prev = 2;
            _context7.next = 5;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                }
              }
            });

          case 5:
            data = _context7.sent;

            res.json({
              success: true,
              data: data
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7['catch'](2);

            next(_context7.t0);

          case 12:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[2, 9]]);
  }));

  return function getEntriesByYear(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

var getTotalEntriesByYear = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res, next) {
    var firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            firstDay = new Date(2017, 0, 1);
            lastDay = new Date(2017, 11, 31);
            _context8.prev = 2;
            _context8.next = 5;
            return _index2.default.Schedule.sum('price', {
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                }
              }
            });

          case 5:
            data = _context8.sent;

            res.json({
              success: true,
              data: data
            });
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8['catch'](2);

            next(_context8.t0);

          case 12:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this, [[2, 9]]);
  }));

  return function getTotalEntriesByYear(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

var getPositiveEntriesByYear = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res, next) {
    var firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            firstDay = new Date(req.params.year, 0, 1);
            lastDay = new Date(req.params.year, 11, 31);
            _context9.prev = 2;
            _context9.next = 5;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $gte: 0
                }
              }
            });

          case 5:
            data = _context9.sent;

            res.json({
              success: true,
              data: data
            });
            _context9.next = 12;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9['catch'](2);

            next(_context9.t0);

          case 12:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this, [[2, 9]]);
  }));

  return function getPositiveEntriesByYear(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

var getTotalPositiveEntriesByYear = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(req, res, next) {
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            // const firstDay = new Date(req.params.year, 0, 1)
            // const lastDay = new Date(req.params.year, 11, 31)

            res.json({
              success: true
            });
            /*
            try {
                const data = await models.Schedule
                                .sum('price', {
                                        where: {
                                                start: {
                                                    $gte: firstDay
                                                },
                                                end: {
                                                    $lte: lastDay
                                                },
                                                price: {
                                                    $gte: 0
                                                }
                                            }
                                        })
                res.json({success: true, data})
            } catch (err) {
                next(err)
            } */

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function getTotalPositiveEntriesByYear(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

var getNegativeEntriesByYear = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res, next) {
    var firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            firstDay = new Date(req.params.year, 0, 1);
            lastDay = new Date(req.params.year, 11, 31);
            _context11.prev = 2;
            _context11.next = 5;
            return _index2.default.Schedule.findAll({
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $lt: 0
                }
              }
            });

          case 5:
            data = _context11.sent;

            res.json({
              success: true,
              data: data
            });
            _context11.next = 12;
            break;

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11['catch'](2);

            next(_context11.t0);

          case 12:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this, [[2, 9]]);
  }));

  return function getNegativeEntriesByYear(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

var getTotalNegativeEntriesByYear = function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(req, res, next) {
    var firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            firstDay = new Date(req.params.year, 0, 1);
            lastDay = new Date(req.params.year, 11, 31);
            _context12.prev = 2;
            _context12.next = 5;
            return _index2.default.Schedule.sum('price', {
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                },
                price: {
                  $lt: 0
                }
              }
            });

          case 5:
            data = _context12.sent;

            res.json({
              success: true,
              data: data
            });
            _context12.next = 12;
            break;

          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12['catch'](2);

            next(_context12.t0);

          case 12:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this, [[2, 9]]);
  }));

  return function getTotalNegativeEntriesByYear(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

var getCountByMonthAndYear = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(req, res, next) {
    var date, firstDay, lastDay, data;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            date = new Date(req.params.year + '-' + req.params.month + '-' + '24');
            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            _context13.prev = 3;
            _context13.next = 6;
            return _index2.default.Schedule.findAll({
              attributes: [[_sequelize2.default.fn('date_trunc', 'month', _sequelize2.default.col('start')), 'month'], [_sequelize2.default.fn('count', '*'), 'count']],
              group: 'month',
              where: {
                start: {
                  $gte: firstDay
                },
                end: {
                  $lte: lastDay
                }
              }
            });

          case 6:
            data = _context13.sent;

            res.json({
              success: true,
              data: data
            });
            _context13.next = 13;
            break;

          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13['catch'](3);

            next(_context13.t0);

          case 13:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this, [[3, 10]]);
  }));

  return function getCountByMonthAndYear(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _index = require('../../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getEntriesByMonthAndYear: getEntriesByMonthAndYear,
  getEntriesByYear: getEntriesByYear,
  getNegativeEntriesByMonthAndYear: getNegativeEntriesByMonthAndYear,
  getPositiveEntriesByMonthAndYear: getPositiveEntriesByMonthAndYear,
  getPositiveEntriesByYear: getPositiveEntriesByYear,
  getNegativeEntriesByYear: getNegativeEntriesByYear,
  getTotalEntriesByMonthAndYear: getTotalEntriesByMonthAndYear,
  getTotalNegativeEntriesByMonthAndYear: getTotalNegativeEntriesByMonthAndYear,
  getTotalPositiveEntriesByMonthAndYear: getTotalPositiveEntriesByMonthAndYear,
  getTotalEntriesByYear: getTotalEntriesByYear,
  getTotalNegativeEntriesByYear: getTotalNegativeEntriesByYear,
  getTotalPositiveEntriesByYear: getTotalPositiveEntriesByYear,
  getCountByMonthAndYear: getCountByMonthAndYear
};
module.exports = exports['default'];
//# sourceMappingURL=entry.resource.js.map
