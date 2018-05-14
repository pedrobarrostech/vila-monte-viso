'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validations = {
  // POST /api/users
  createUser: {
    body: {
      username: _joi2.default.string().required(),
      password: _joi2.default.string().required()
    }
  },

  createSchedule: {
    body: {
      title: _joi2.default.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: _joi2.default.string().required(),
      password: _joi2.default.string().required()
    },
    params: {
      userId: _joi2.default.string().hex().required()
    }
  },

  // POST /api/clients
  createClient: {
    body: {
      name: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      rg: _joi2.default.string().required(),
      cpf: _joi2.default.string().required(),
      maritalStatus: _joi2.default.string().required(),
      sex: _joi2.default.string().required(),
      address: _joi2.default.string().required(),
      city: _joi2.default.string().required(),
      state: _joi2.default.string().required(),
      phone: _joi2.default.string().required(),
      facebook: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      birthday: _joi2.default.string().required(),
      info: _joi2.default.string().required()
    }
  },

  // UPDATE /api/clients/:clientId
  updateClient: {
    body: {
      name: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      rg: _joi2.default.string().required(),
      cpf: _joi2.default.string().required(),
      maritalStatus: _joi2.default.string().required(),
      sex: _joi2.default.string().required(),
      address: _joi2.default.string().required(),
      city: _joi2.default.string().required(),
      state: _joi2.default.string().required(),
      phone: _joi2.default.string().required(),
      facebook: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      birthday: _joi2.default.string().required(),
      info: _joi2.default.string().required()
    },
    params: {
      clientId: _joi2.default.string().hex().required()
    }
  },

  // POST /api/messages
  createMessage: {
    body: {
      title: _joi2.default.string().required(),
      subject: _joi2.default.string().required(),
      phone: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      message: _joi2.default.string().required()
    }
  },

  // UPDATE /api/messages/:messageId
  updateMessage: {
    body: {
      title: _joi2.default.string().required(),
      subject: _joi2.default.string().required(),
      phone: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      message: _joi2.default.string().required()
    },
    params: {
      messageId: _joi2.default.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: _joi2.default.string().required(),
      password: _joi2.default.string().required()
    }
  }
};

exports.default = validations;
module.exports = exports['default'];
//# sourceMappingURL=param-validation.js.map
