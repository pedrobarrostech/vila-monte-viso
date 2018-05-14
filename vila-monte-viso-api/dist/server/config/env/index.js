'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var config = require('./' + env); // eslint-disable-line import/no-dynamic-require

var defaults = {
  root: _path2.default.join(__dirname, '/..')
};

exports.default = (0, _assign2.default)(defaults, config);
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
