import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "https://api.blockchain.com/v3/exchange/tickers/";
const symbol = "BTC-USD"


app.use(express.static("public"));

//use axios to get the current btc price and send to the ejs view

app.get("/", async(req, res) => {
    try {
        const response = await axios.get(API_URL + symbol);
        const price = response.data.price_24h;
        console.log(price);
        res.render("index.ejs", {coinPrice: price});
        
    } catch (error) {
        console.log(error.message)
        res.status(500);
        
    }
})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  