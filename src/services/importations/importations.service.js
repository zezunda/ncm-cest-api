// Initializes the `importations` service on path `/importations`
const createService = require('feathers-sequelize');
const createModel = require('../../models/importations.model');
const hooks = require('./importations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'importations',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/importations', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('importations');

  service.hooks(hooks);
};
