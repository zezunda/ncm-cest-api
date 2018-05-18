const { authenticate } = require('@feathersjs/authentication').hooks;

const addAssociations = require('../../hooks/add-associations');

const model = {
  models: [
    {
      model: 'clients',
      as: 'client'
    }
  ]
}

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [addAssociations(model)],
    find: [authenticate('jwt'),],
    get: [authenticate('jwt')],
    create: [hashPassword()],
    update: [hashPassword(), authenticate('jwt')],
    patch: [hashPassword(), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [protect('password')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};