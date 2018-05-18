const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const importations = sequelizeClient.define('importations', {
    isInvoice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Pendente', 'Concluída']
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  importations.associate = function (models) {
    // Invoice
    importations.hasOne(models.invoices, {
      as: 'invoice',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    // Clients
    importations.belongsTo(models.clients, {
      as: 'client',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    // Products
    importations.hasMany(models.products, { as: 'products' });
  };

  return importations;
};
