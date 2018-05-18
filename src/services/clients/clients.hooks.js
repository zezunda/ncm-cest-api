const { authenticate } = require('@feathersjs/authentication').hooks;

const DisableOperators = require('../../hooks/disable-operators');

const addAssociations = require('../../hooks/add-associations');

const model = {
  models: [
    {
      model: 'operators',
      as: 'operators'
    }
  ]
}

module.exports = {
  before: {
    all: [ authenticate('jwt'), addAssociations(model) ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [DisableOperators()],
    remove: []
  },

  after: {
    all: [],
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
