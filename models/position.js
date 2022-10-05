'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
     
    }
  }
  Position.init({
    symbol: DataTypes.STRING,
    numShares: DataTypes.INTEGER,
    avgPriceShare: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Position',
    tableName: 'positions'
  });
  return Position;
};