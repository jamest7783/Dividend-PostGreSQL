const {Portfolio,Order,Symbol}='../models'
const YF=require('yahoo-finance')


const createPortfolio=(req,res)=>{
    try{
        res.status(200).json({msg:'hello'})
    }catch(error){
        res.status(200).json({msg:'error'})
    }
}




module.exports={
    createPortfolio
}