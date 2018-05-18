const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const invoices = sequelizeClient.define('invoices', {
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nNF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dhEmi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dhSaiEnt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpNF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indPag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indPres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    natOp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indFinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idDest: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  invoices.associate = function (models) {
    // Importations
    invoices.belongsTo(models.importations, {
      as: 'importation',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
   };

  return invoices;
};
