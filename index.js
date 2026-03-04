const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Production 🚀 Syaiful dann syaiful awwwwwww");
});

app.listen(5028, () => {
  console.log("Server running on port 5028");
});