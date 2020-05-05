const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello World");
    response.end();
  } else {
    response.write("404");
    response.end();
  }
});

server.listen("3000");
