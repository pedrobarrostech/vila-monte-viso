'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _section = require('./section.resource');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.route('/').get(_section2.default.list).post(_section2.default.create);

router.route('/:sectionId').get(_section2.default.get).put(_section2.default.update).delete(_section2.default.remove);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=section.route.js.map
