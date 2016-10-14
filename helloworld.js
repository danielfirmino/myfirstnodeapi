var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8086
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS!');
}).listen(server_port);
console.log('Server running at http://localhost:' + server_port);
