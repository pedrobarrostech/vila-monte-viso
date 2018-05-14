'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveResizeImage(data, fileName, id) {
  var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 256;

  var fileDest = 'uploads/' + fileName;
  var resizedImgLocation = 'uploads/thumbs/' + id + fileName;
  var thumbFileAdminLocation = '../artwork-admin/src/assets/uploads/thumbs/' + id + fileName;
  var thumbFileLocation = '../artwork-landing-page/src/template/uploads/thumbs/' + id + fileName;
  _fs2.default.writeFile(fileDest, data, { encoding: 'base64' }, function (errWriteFile) {
    _jimp2.default.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile;
      img.resize(width, _jimp2.default.AUTO).write(resizedImgLocation);
    });

    _jimp2.default.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile;
      img.resize(50, _jimp2.default.AUTO).write(thumbFileAdminLocation);
    });

    _jimp2.default.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile;
      img.resize(width, _jimp2.default.AUTO).write(thumbFileLocation);
    });
    if (errWriteFile) throw errWriteFile;
  });
}

function deleteImage(src) {
  _fs2.default.unlinkSync(src);
  _fs2.default.unlinkSync('../artwork-admin/src/assets/' + src);
}

function generateId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

exports.default = { saveResizeImage: saveResizeImage, deleteImage: deleteImage, generateId: generateId };
module.exports = exports['default'];
//# sourceMappingURL=image.helper.js.map
