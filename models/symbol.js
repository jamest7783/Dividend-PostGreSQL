'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symbol extends Model {
    static associate(models) {

    }
  }
  Symbol.init({
    symbol: DataTypes.STRING,
    lastPrice: DataTypes.FLOAT,
    iconUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Symbol',
    tableName: 'symbols'
  });
  return Symbol;
};