const express = require("express");
const { getUsers, getUserByUuid } = require("./constrollers/users.controller");
const app = express();
const PORT = 8082;

app.listen(PORT, () => {
  console.log("Listening to Port: ", PORT);
});

app.get("/users", getUsers);

app.get("/users/:uuid", getUserByUuid);
