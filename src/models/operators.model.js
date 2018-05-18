const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const operators = sequelizeClient.define('operators', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['Cliente', 'Colaborador'],
      allowNull: false,
      defaultValue: 'Cliente'
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

  operators.associate = function (models) {
    // Clients
    operators.belongsTo(models.clients, {
      as: 'client',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  };

  return operators;
};
