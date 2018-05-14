import joi from 'joi'

const validations = {
  // POST /api/users
  createUser: {
    body: {
      username: joi.string().required(),
      password: joi.string().required()
    }
  },

  createSchedule: {
    body: {
      title: joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: joi.string().required(),
      password: joi.string().required()
    },
    params: {
      userId: joi.string().hex().required()
    }
  },

  // POST /api/clients
  createClient: {
    body: {
      name: joi.string().required(),
      lastName: joi.string().required(),
      rg: joi.string().required(),
      cpf: joi.string().required(),
      maritalStatus: joi.string().required(),
      sex: joi.string().required(),
      address: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      phone: joi.string().required(),
      facebook: joi.string().required(),
      email: joi.string().required(),
      birthday: joi.string().required(),
      info: joi.string().required()
    }
  },

  // UPDATE /api/clients/:clientId
  updateClient: {
    body: {
      name: joi.string().required(),
      lastName: joi.string().required(),
      rg: joi.string().required(),
      cpf: joi.string().required(),
      maritalStatus: joi.string().required(),
      sex: joi.string().required(),
      address: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      phone: joi.string().required(),
      facebook: joi.string().required(),
      email: joi.string().required(),
      birthday: joi.string().required(),
      info: joi.string().required()
    },
    params: {
      clientId: joi.string().hex().required()
    }
  },

  // POST /api/messages
  createMessage: {
    body: {
      title: joi.string().required(),
      subject: joi.string().required(),
      phone: joi.string().required(),
      email: joi.string().required(),
      message: joi.string().required()
    }
  },

  // UPDATE /api/messages/:messageId
  updateMessage: {
    body: {
      title: joi.string().required(),
      subject: joi.string().required(),
      phone: joi.string().required(),
      email: joi.string().required(),
      message: joi.string().required()
    },
    params: {
      messageId: joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: joi.string().required(),
      password: joi.string().required()
    }
  }
}

export default validations
