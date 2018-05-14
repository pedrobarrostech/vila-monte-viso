'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = require('./product.resource');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/').get(_product2.default.list).post(_product2.default.create);

router.route('/active').get(_product2.default.listActives);

router.route('/:productId').get(_product2.default.get).put(_product2.default.update).delete(_product2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=product.route.js.map
