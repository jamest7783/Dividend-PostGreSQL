const {Router}=require('express')
const AppRouter=Router()
const {createPortfolio}=require('../controllers')


AppRouter.get('/portfolio/create',createPortfolio)

module.exports=AppRouter