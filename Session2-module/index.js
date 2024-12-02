// We will be using import and export from esmodules(ESM)
import express from "express";
import {
  getCurrencies,
  getCurrencyBySymbol,
} from "./constrollers/currencies.controller.js";
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
app.get("/currencies", getCurrencies);

// Activity 1.2 - Extending APIs with Express
app.get("/currencies/:symbol", getCurrencyBySymbol);
