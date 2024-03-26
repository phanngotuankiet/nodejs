const express = require("express");
const app = express();

const testGenreModelFile = require('./models/Users');

app.get("/", (req, res) => {
  res.json(testGenreModelFile.all());
});
// test

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
