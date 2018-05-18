const sequelize = require('sequelize');
module.exports = function (options = {}) {
  return async context => {
    if (context.params.query.$distinct) {
      const distinct = context.params.query.$distinct;
      context.params.sequelize = {
        attributes: [sequelize.literal(`DISTINCT ${distinct}`), distinct],
        order: [distinct]
      };
      context.params.paginate = false;
      delete context.params.query.$limit;
      delete context.params.query.$distinct;      
    }
    return context;
  };
};
