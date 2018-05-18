const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    barCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    groupCd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cst: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true      
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  products.associate = function (models) {
    // Importations
    products.belongsTo(models.importations, {
      as: 'importation',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });

    products.belongsTo(models.clients, {
      as: 'client',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  };

  return products;
};
