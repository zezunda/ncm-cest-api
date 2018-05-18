const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const clients = sequelizeClient.define('clients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    ie: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    iest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    crt: {
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

  clients.associate = function (models) {
    // Operators
    clients.hasMany(models.operators, { as: 'operators' });
  };

  return clients;
};
