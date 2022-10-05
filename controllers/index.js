const {Portfolio,Order,Symbol}=require('../models')
const YF=require('yahoo-finance')


const createPortfolio=async (req,res)=>{
    try{
        const {ownerId,name,description,liquidCapital}=req.body
        const portfolio=await Portfolio.create({ownerId,name,description,liquidCapital})
        res.status(200).json(portfolio)
    }catch(error){throw error}
}




module.exports={
    createPortfolio
}