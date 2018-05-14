'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global it, describe */
_chai2.default.config.includeStack = true;

describe('## Misc', function () {
  describe('# GET /apiv1/404', function () {
    it('should return 404 status', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/apiv1/404').expect(_httpStatus2.default.NOT_FOUND).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Not Found');
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=misc.test.js.map
