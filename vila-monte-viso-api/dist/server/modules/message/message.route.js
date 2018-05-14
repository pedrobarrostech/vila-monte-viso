'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _message = require('./message.resource');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/').get(_message2.default.list).post((0, _expressValidation2.default)(_paramValidation2.default.createMessage), _message2.default.create);

router.route('/:messageId').get(_message2.default.get).put((0, _expressValidation2.default)(_paramValidation2.default.updateMessage), _message2.default.update).delete(_message2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=message.route.js.map
