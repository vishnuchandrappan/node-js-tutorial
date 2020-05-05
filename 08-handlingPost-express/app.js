const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use("/public", express.static(path.join(__dirname, "src")));
/** Parse URL encoded forms */
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

/** handling POST request
 *
 *
 * username : admin@example.com
 * password : password
 */
app.post("/", (req, res) => {
  if (
    req.body.username === "admin@example.com" &&
    req.body.password === "password"
  ) {
    res.status(200).json({
      status: "OK",
      message: "Login ",
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "Unauthorized ",
    });
  }
});

app.listen(3000);
