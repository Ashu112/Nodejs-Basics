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
app.get("/currencies", async (req, res) => {
  try {
    const response = await axios.get("https://api.coinbase.com/v2/currencies");
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
});
