/** importing express */
const express = require("express");

/** express() will return an Object */
const app = express();

/** handling a get request */
app.get("/", (req, res) => {
  res.send("Hello World");
});


/** Port */
app.listen(3000);
