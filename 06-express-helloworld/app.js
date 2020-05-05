/** importing express */
const express = require("express");

/** express() will return an Object */
const app = express();

/** handling a get request */
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

/**
 * Request Params
 *
 * http://localhost:3000/me/John/18
 */
app.get("/me/:name/:age", (req, res) => {
  res.send(
    `Hallo Welt, ich heiße ${req.params.name} und Ich bin ${req.params.age} Jahre alt`
  );
});

/** Query String
 *
 * http://localhost:3000/search?q=king
 */
app.get("/search", (req, res) => {
  res.send(`You searched for ${req.query.q}`);
});

/** Port */
app.listen(3000);
