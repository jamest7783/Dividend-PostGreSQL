const {Router}=require('express')
const AppRouter=Router()
const {
    createPortfolio,
    createOrder,
    getAllPortfolioOrders,
    getSymbolIcon,
    findOrCreateSymbol
}=require('../controllers')


AppRouter.get('/portfolio/create',createPortfolio)
AppRouter.post('/order/create',createOrder)
AppRouter.get('/portfolio/orders',getAllPortfolioOrders)

AppRouter.get('/symbol',findOrCreateSymbol)

AppRouter.get('/symbol/icon',getSymbolIcon)

module.exports=AppRouter