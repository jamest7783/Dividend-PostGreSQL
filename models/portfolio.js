'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      // define association here
    }
  }
  Portfolio.init({
    ownerId: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    liquidCapital: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};