
const Ticker = require('../model/Ticker');

const getTickers = async(req,res)=>{
    try {
        const tickers = await Ticker.findAll();
        res.json(tickers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error fetching tickers');
    }
}


module.exports = {getTickers} 