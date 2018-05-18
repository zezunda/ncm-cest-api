/* eslint-disable no-unused-vars */
const searcher = require('../cosmos/cosmos.js')();
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return { id };
  }

  create(data, params) {
    switch (data.search) {
      case 'list':
        return searcher.getOptions(data.term).then(result => result);
      case 'item':
        return searcher.getItem(data.term).then(result => result);
      case 'url':
        return searcher.getItemUrl(data.term).then(result => result);
      default:
        return [];
    }
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
