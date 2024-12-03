const axios = require("axios");

const getUsers = async (req, res) => {
  try {
    const URL =
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json";
    const response = await axios.get(URL);
    //console.log(response.data);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: "Please try aagain" });
  }
};

const getUserByUuid = async (req, res) => {
  try {
    const URL =
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json";
    const response = await axios.get(URL);
    const users = response.data;
    console.log(req.params);
    console.log("users", users);
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
};

module.exports = { getUsers, getUserByUuid };
