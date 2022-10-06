'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symbol extends Model {
    static associate(models) {
      Symbol.belongsToMany(models.Portfolio,{
        through:'orders',
        as:'symbols',
        foreignKey:'symbolId'
      })
    }
  }
  Symbol.init({
    symbol: DataTypes.STRING,
    companyName: DataTypes.STRING,
    lastPrice: DataTypes.FLOAT,
    iconUrl:{
      type:DataTypes.STRING,
      defaultValue:''
    }
  }, {
    sequelize,
    modelName: 'Symbol',
    tableName: 'symbols'
  });
  return Symbol;
};