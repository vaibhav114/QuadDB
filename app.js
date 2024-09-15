const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { TickerRoute } = require("./route/TickerRoute");
const axios = require("axios");
const Ticker = require("./model/Ticker");
const sequelize = require("./database/pg");

app.use(cors());
app.use("/main", TickerRoute);

const fetchTickers = async () => {
  try {

    await Ticker.drop();
    console.log("Ticker table dropped");

    await Ticker.sync();
    console.log("Ticker table recreated");

    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    console.log("Data fetched from WazirX API");

    const tickersArray = Object.values(data).slice(0, 10);

    const savedTickers = await Promise.all(
      tickersArray.map((ticker) =>
        Ticker.create({
          name: ticker.name,
          last: ticker.last,
          buy: ticker.buy,
          sell: ticker.sell,
          volume: ticker.volume,
          base_unit: ticker.base_unit,
        })
      )
    );

    console.log("Tickers inserted into the database");
  } catch (err) {
    console.error("Error fetching or inserting tickers:", err.message);
  }
};

const start = async () => {
  try {

    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(process.env.PORT, () => {
      console.log(`Server Listening on port: ${process.env.PORT}`);
    });

    fetchTickers();
  } catch (err) {
    console.error("Error starting the server:", err);
  }
};

start();
