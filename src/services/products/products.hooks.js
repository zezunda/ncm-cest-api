const { authenticate } = require('@feathersjs/authentication').hooks;

const groupDistinct = require('../../hooks/group-distinct');

const productsCompare = require('../../hooks/products-compare');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [groupDistinct()],
    get: [],
    create: [],
    update: [productsCompare()],
    patch: [productsCompare()],
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
