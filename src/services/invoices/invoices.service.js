// Initializes the `invoices` service on path `/invoices`
const createService = require('feathers-sequelize');
const createModel = require('../../models/invoices.model');
const hooks = require('./invoices.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'invoices',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/invoices', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('invoices');

  service.hooks(hooks);
};
