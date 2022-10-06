const {Portfolio,Order,Symbol}=require('../models')
const YahooFinance=require('yahoo-finance')
const GoogleNewsAPI = require("google-news-json");
const ClearbitLogo=require('clearbit-logo')
const IconTool=new ClearbitLogo

const createPortfolio=async (req,res)=>{
    try{
        const {ownerId,name,description,liquidCapital}=req.body
        const portfolio=await Portfolio.create({ownerId,name,description,liquidCapital})
        res.status(200).json(portfolio)
    }catch(error){throw error}
}


const getSymbolIcon=async (req,res)=>{
    const {symbol}=req.body
    await YahooFinance.quote({
        symbol,modules:['price','summaryDetail']
    },function(error,summary){
        if(error){throw error}
        if(!summary){res.status(200).json({alert:'Ticker not found.'})}
        else{
            try{
                let company=summary.price.longName
                if(company.includes(',')){company=company.split(',')[0]}
                if(company.includes('.')){company=company.split('.')[0]}
                if(company.includes('Inc')){company=company.split('Inc')[0]}
                if(company.includes('Company')){company=company.split('Company')[0]}
                if(company.includes('Growth')){company=company.split('Growth')[0]}
                if(company.includes('Limited')){company=company.split('Limited')[0]}
                if(company.includes('Motor')){company=company.split('Motor')[0]}
                company=company.trim()
                IconTool.suggestions(company).then((companies)=>{
                   if(companies[0]){res.status(200).json({logo:companies[0].logo})}
                   else{res.send('Logo not found - empty array')}
                })
            }catch(error){res.send('Logo not found - empty array')}
        }
    })
}
























/* data */
const getHistoricalData=async (req,res)=>{
    const {symbol,from,to,period}=req.body 
    await yahooFinance.historical({
        symbol,from,to,period
    },function(error,quotes){
        if(error){throw error}
        if(!quotes[0]){res.status(200).json({alert:'Ticker & Ticker Quotes not found.'})}
        else{
            res.status(200).json(quotes)
            const appendHistory=async ()=>{
                const equityWithHistoricalData=await Equity.find({symbol})
                equityWithHistoricalData.historicalData={alert:'whoooho'}
                //equityWithHistoricalData.save()
                res.status(200).json(equityWithHistoricalData.historialData)
            }
            appendHistory()
        }
    })
}
const getSummary=async (req,res)=>{
    const {symbol}=req.body
    await yahooFinance.quote({
        symbol,modules:['price','summaryDetail']
    },function(error,summary){
        if(error){throw error}
        !summary?res.status(200).json({alert:'Ticker not found.'}):
        res.status(200).json(summary)
    })
}
const getSymbolNews=async (req,res)=>{
    const {symbol}=req.body
    const news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,symbol,"en-GB")
    res.status(200).json(news) 
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
    getAllPortfolioOrders,
    getSymbolIcon
}