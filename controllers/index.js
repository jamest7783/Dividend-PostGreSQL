const {Portfolio,Order,Symbol}=require('../models')
const YF=require('yahoo-finance')


const createPortfolio=async (req,res)=>{
    try{
        const {ownerId,name,description,liquidCapital}=req.body
        const portfolio=await Portfolio.create({ownerId,name,description,liquidCapital})
        res.status(200).json(portfolio)
    }catch(error){throw error}
}
const createOrder=async (req,res)=>{
    try{
        const {numShares,priceShare,portfolioId,symbolId}=req.body
        const order=await Order.create({numShares,priceShare,portfolioId,symbolId})
        res.status(200).json(order)
    }catch(error){throw error}
}

// going to become positions 

const getAllPortfolioOrders=async (req,res)=>{
    try{
        const {portfolioId}=req.body
        const orders=await Order.findAll({where:{portfolioId}})
        let positions=[]
        let position={}
        orders.map((order)=>{
            if(!positions.includes(order.symbolId)){
                position={
                    symbol:'',
                    numShares:0,
                    avgPriceShare:0
                }
                positions.push(position)
            }
            else{
                
            }
        })
        res.status(200).json(positions)
    }catch(error){throw error}
}




module.exports={
    createPortfolio,
    createOrder,
    getAllPortfolioOrders
}