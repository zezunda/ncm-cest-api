module.exports = function (options = {}) {
  return async context => {
    const { data, app } = context;
    const service = app.services.operators
    const operators = service
      .find({
        query: {
          clientId: context.id
        }
      });
    operators.then(items => {
      items.data.forEach(item => {
        service.patch(item.id, data);
      });
    });
    return context;
  };
};
