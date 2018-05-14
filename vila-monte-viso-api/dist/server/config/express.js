'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _expressWinston = require('express-winston');

var _expressWinston2 = _interopRequireDefault(_expressWinston);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _winston = require('./winston');

var _winston2 = _interopRequireDefault(_winston);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _APIError = require('../helpers/APIError');

var _APIError2 = _interopRequireDefault(_APIError);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

if (_env2.default.env === 'development') {
  app.use((0, _morgan2.default)('dev'));
}

app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, _compression2.default)());
app.use((0, _methodOverride2.default)());

// Segurar a app apps setando vários HTTP headers
app.use((0, _helmet2.default)());

// Habilitar CORS - Cross Origin Resource Sharing
app.use((0, _cors2.default)({ origin: ['http://admin.pedrobarros.info', 'http://localhost:4200', 'http://artwork.pedrobarros.info', 'http://localhost:3000'] }));

// habilitar o log detalhado da API no ambiente de dev
if (_env2.default.env === 'development') {
  _expressWinston2.default.requestWhitelist.push('body');
  _expressWinston2.default.responseWhitelist.push('body');
  app.use(_expressWinston2.default.logger({
    winstonInstance: _winston2.default,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true // Corrige o código de status (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

// montar todas as rotas no caminho /api
app.use('/api', _routes2.default);
app.use('/uploads', _express2.default.static(_path2.default.join(__dirname, '../../../uploads')));

// se o erro não é uma instância de APIError, converta-o.
app.use(function (err, req, res, next) {
  if (err instanceof _expressValidation2.default.ValidationError) {
    // erro de validação contém erros que é uma matriz de erro contendo cada uma mensagem []
    var unifiedErrorMessage = err.errors.map(function (error) {
      return error.messages.join('. ');
    }).join(' and ');
    var error = new _APIError2.default(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof _APIError2.default)) {
    var apiError = new _APIError2.default(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

// pegar 404 e encaminhar para o manipulador de erros
app.use(function (req, res, next) {
  var err = new _APIError2.default('API not found', _httpStatus2.default.NOT_FOUND);
  return next(err);
});

if (_env2.default.env !== 'test') {
  app.use(_expressWinston2.default.errorLogger({
    winstonInstance: _winston2.default
  }));
}

// manipulador de erros, envie stacktrace somente durante o desenvolvimento
app.use(function (err, req, res, next) {
  return res.status(err.status).json({
    message: err.isPublic ? err.message : _httpStatus2.default[err.status],
    stack: _env2.default.env === 'development' ? err.stack : {}
  });
});

exports.default = app;
module.exports = exports['default'];
//# sourceMappingURL=express.js.map
