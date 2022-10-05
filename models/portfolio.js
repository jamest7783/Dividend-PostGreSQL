'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      Portfolio.belongsToMany(models.Symbol,{
        through:'orders',
        as:'portfolios',
        foreignKey:'portfolioId'
      })
    }
  }
  Portfolio.init({
    ownerId: DataTypes.STRING,
    name:{
      type:DataTypes.STRING,
      defaultValue:'New Portfolio'
    },
    description:{
      type:DataTypes.STRING,
      defaultValue:'add a description'
    },
    liquidCapital:{
      type:DataTypes.FLOAT,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Portfolio',
    tableName: 'portfolios'
  });
  return Portfolio;
};