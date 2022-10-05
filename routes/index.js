const {Router}=require('express')
const AppRouter=Router()
const {
    createPortfolio,
    createOrder,
    getAllPortfolioOrders
}=require('../controllers')


AppRouter.get('/portfolio/create',createPortfolio)
AppRouter.post('/order/create',createOrder)
AppRouter.get('/portfolio/orders',getAllPortfolioOrders)

module.exports=AppRouter