// 1. import express
// 2. create an app instance
// 3. listen to the port
// 4. Add a route

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8082;

app.listen(PORT, () => {
  console.log("Listening at PORT:", PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

// Activity 1 create a route for currencies using express server
// Activity 2 Filter with a query
app.get("/currencies", async (req, res) => {
  const { min_value } = req.query;
  try {
    const response = await axios.get("https://api.coinbase.com/v2/currencies");
    if (min_value) {
      return res.send(
        response.data.data.filter((curr) => curr.min_size === min_value)
      );
    }
    res.send(response.data.data);
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
});

// Activity 1.2 - Extending APIs with Express
app.get("/currencies/:symbol", async (req, res) => {
  try {
    const response = await axios.get("https://api.coinbase.com/v2/currencies");
    const currencyData = response.data.data;
    const result = currencyData.find(
      (currency) => currency.id === req.params.symbol.toUpperCase()
    );
    if (result) return res.send(result);

    res.status(404).send({ message: "Invalid Currency" });
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
});
