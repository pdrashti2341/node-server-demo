var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!drashti');
}).listen(8081);

console.log("look at http://127.0.0.1:8081/")