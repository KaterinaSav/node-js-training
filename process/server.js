var http = require('http');

var opts = require('optimist').argv;

http.createServer(function (req, res) {
  res.end("The server is running!");
}).listen(opts.port);