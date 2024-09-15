const express = require('express')
const TickerRoute = express.Router()
const {getTickers} = require('../controller/TickerController')

TickerRoute.route('/get-tickers').get(getTickers) 

module.exports = {TickerRoute}