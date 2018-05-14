'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _client = require('../modules/client/client.route');

var _client2 = _interopRequireDefault(_client);

var _user = require('../modules/user/user.route');

var _user2 = _interopRequireDefault(_user);

var _auth = require('../modules/auth/auth.route');

var _auth2 = _interopRequireDefault(_auth);

var _schedule = require('../modules/schedule/schedule.route');

var _schedule2 = _interopRequireDefault(_schedule);

var _entry = require('../modules/entry/entry.route');

var _entry2 = _interopRequireDefault(_entry);

var _message = require('../modules/message/message.route');

var _message2 = _interopRequireDefault(_message);

var _banner = require('../modules/banner/banner.route');

var _banner2 = _interopRequireDefault(_banner);

var _section = require('../modules/section/section.route');

var _section2 = _interopRequireDefault(_section);

var _product = require('../modules/product/product.route');

var _product2 = _interopRequireDefault(_product);

var _service = require('../modules/service/service.route');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/health-check', function (req, res) {
  return res.send('OK');
});

router.use('/clients', _client2.default);
router.use('/users', _user2.default);
router.use('/schedules', _schedule2.default);
router.use('/auth', _auth2.default);
router.use('/entries', _entry2.default);
router.use('/messages', _message2.default);
router.use('/banners', _banner2.default);
router.use('/sections', _section2.default);
router.use('/products', _product2.default);
router.use('/services', _service2.default);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=routes.js.map
