const express = require("express");

const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();

  const resultDate = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

module.exports = app;
