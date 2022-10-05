'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    date: DataTypes.DATE,
    numShares: DataTypes.INTEGER,
    priceShare: DataTypes.FLOAT,
    portfolioId: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};