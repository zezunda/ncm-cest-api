// Initializes the `searcher` service on path `/searcher`
const createService = require('./searcher.class.js');
const hooks = require('./searcher.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'searcher',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/searcher', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('searcher');
  service.hooks(hooks);
};
