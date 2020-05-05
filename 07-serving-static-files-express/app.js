const express = require("express");
const path = require("path");

const app = express();
app.use("/public", express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "contact.html"));
});

app.listen(3000);
