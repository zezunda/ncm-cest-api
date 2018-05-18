module.exports = function (options = {}) {
  options.models = options.models || [];
  return async context => {
    const sequelize = context.params.sequelize || {};
    const include = sequelize.include || [];
    sequelize.include = include.concat(options.models.map(model => {
      const newModel = { ...model };
      newModel.model = context.app.services[model.model].Model;
      return newModel;
    }));
    sequelize.raw = false;
    context.params.sequelize = sequelize;
    return context;
  };
};