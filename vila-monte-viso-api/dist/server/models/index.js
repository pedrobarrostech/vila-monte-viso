'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = _path2.default.basename(module.filename);
var db = {};

var sequelize = new _sequelize2.default(_env2.default.db.database, _env2.default.db.username, _env2.default.db.password, _env2.default.db);

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename;
}).forEach(function (file) {
  if (file.slice(-3) !== '.js') return;
  var model = sequelize['import'](_path2.default.join(__dirname, file));
  db[model.name] = model;
});

(0, _keys2.default)(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

exports.default = db;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
