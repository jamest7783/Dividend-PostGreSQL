'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      
    }
  }
  Order.init({
    date: DataTypes.DATE,
    numShares: DataTypes.INTEGER,
    priceShare: DataTypes.FLOAT,
    portfolioId: DataTypes.INTEGER,
    symbolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};