const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      const readStream = fs.createReadStream("./static/index.html");
      response.writeHead(200, { "Content-type": "text/html" });
      readStream.pipe(response);
    } else if (request.url === "/todos") {
      const readStream = fs.createReadStream("./static/todos.json");
      response.writeHead(200, { "Content-type": "application/json" });
      readStream.pipe(response);
    } else {
      response.write("404");
      response.end();
    }
  })
  .listen(3000);
