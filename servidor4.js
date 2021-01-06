var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    var categoria = request.url;
    // A constante __dirname retorna o diretório raiz da aplicação.
if (categoria == '/artigos') {
    fs.readFile(__dirname + '/artigos.html', function (err, html){
        response.end(html);
    });
} else if (categoria == '/contato') {
    fs.readFile(__dirname + '/contato.html', function (err, html){
        response.end(html);
    });
} else {
    fs.readFile(__dirname + '/erro.html', function (err, html){
        response.end(html);
    });
}
});

server.listen(8001, function () {
    console.log('Executando site Desafio 1');
});
