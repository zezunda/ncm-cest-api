// Initializes the `cest` service on path `/cest`
const createService = require('feathers-sequelize');
const createModel = require('../../models/cest.model');
const hooks = require('./cest.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cest',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cest', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cest');

  service.hooks(hooks);
};
