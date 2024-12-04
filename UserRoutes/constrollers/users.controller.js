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
    const result = users.data.find((i) => i.login.uuid === req.params.uuid);
    if (result) return res.send(result);

    res.status(404).send({ message: "Id not available" });
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
};

const getUserByQuery = async (req, res) => {
  const { gender, age } = req.query;
  try {
    const URL =
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json";
    const response = await axios.get(URL);
    const users = response.data.data;
    const ageAsNumber = parseInt(age, 10);
    const result = users.filter((user) => {
      return (
        (!gender || user.gender === gender) &&
        (!age || user.dob.age === ageAsNumber)
      );
    });
    if (result.length > 0) return res.send(result);

    res.status(404).send({ message: "User not available" });
  } catch (error) {
    res.status(500).send({ message: "Something Went wrong, Try Again!!!" });
  }
};

module.exports = { getUsers, getUserByUuid, getUserByQuery };
