const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cest = sequelizeClient.define('cest', {
    cest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ncm: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupCd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
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
    annex: {
      type: DataTypes.STRING,
      allowNull: false
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

  cest.associate = function (models) { };

  return cest;
};