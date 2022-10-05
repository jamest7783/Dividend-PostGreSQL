'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symbol extends Model {

    static associate(models) {
      // define association here
    }
  }
  Symbol.init({
    symbol: DataTypes.STRING,
    lastPrice: DataTypes.FLOAT,
    iconUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Symbol',
  });
  return Symbol;
};