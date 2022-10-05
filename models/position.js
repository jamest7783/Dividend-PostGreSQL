'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      // define association here
    }
  }
  Position.init({
    symbol: DataTypes.STRING,
    numShares: DataTypes.INTEGER,
    avgPriceShare: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};