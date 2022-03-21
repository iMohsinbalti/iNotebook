const express = require("express");
const connectToMogo = require("./db");
const app = express();

connectToMogo();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
