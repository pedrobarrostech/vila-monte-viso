'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _banner = require('./banner.resource');

var _banner2 = _interopRequireDefault(_banner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/').get(_banner2.default.list).post(_banner2.default.create);

router.route('/active').get(_banner2.default.listActives);

router.route('/:bannerId').get(_banner2.default.get).put(_banner2.default.update).delete(_banner2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=banner.route.js.map
