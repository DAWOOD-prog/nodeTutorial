const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("welcome to about page");
  } else {
    res.end(`<h1>Oops</h1>
    <p>we could not seem to find a page that you are looking for</p>
    <a href="/">Back to home</a>`);
  }
});

server.listen(5000);
