const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use("/public", express.static(path.join(__dirname, "src")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });
});


app.listen(3000);
