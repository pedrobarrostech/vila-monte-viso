'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _service = require('./service.resource');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/').get(_service2.default.list).post(_service2.default.create);

router.route('/active').get(_service2.default.listActives);

router.route('/:serviceId').get(_service2.default.get).put(_service2.default.update).delete(_service2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=service.route.js.map
