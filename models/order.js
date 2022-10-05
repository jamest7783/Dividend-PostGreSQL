'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init({
    numShares: DataTypes.INTEGER,
    priceShare: DataTypes.FLOAT,
    portfolioId:{
      type:DataTypes.INTEGER,
      references:{
        model:'portfolios',
        key:'id'
      }
    },
    symbolId:{
      type:DataTypes.INTEGER,
      references:{
        model:'symbols',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};