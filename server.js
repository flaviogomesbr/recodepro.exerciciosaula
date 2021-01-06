var servidor = require('http');

servidor.createServer(function(req,res) {
    res.end("<h1> Ola mundo!! </h1>")
}).listen(8001);

console.log('Servidor Ativo!')