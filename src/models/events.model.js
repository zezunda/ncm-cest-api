const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const events = sequelizeClient.define('events', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  events.associate = function (models) {
    events.belongsTo(models.products, {
      as: 'product',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    events.belongsTo(models.importations, {
      as: 'importation',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  };

  return events;
};
