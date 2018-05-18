// Initializes the `operators` service on path `/operators`
const createService = require('feathers-sequelize');
const createModel = require('../../models/operators.model');
const hooks = require('./operators.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'operators',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/operators', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('operators');

  service.hooks(hooks);
};
