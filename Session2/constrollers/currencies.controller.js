// making a callback function in a controller
const axios = require("axios");

const getCurrencies = async (req, res) => {
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
};

const getCurrencyBySymbol = async (req, res) => {
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
};

module.exports = { getCurrencies, getCurrencyBySymbol };
