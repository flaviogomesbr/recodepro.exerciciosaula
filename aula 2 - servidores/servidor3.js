var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    var categoria = request.url;
    // A constante __dirname retorna o diretório raiz da aplicação.
if (categoria == '/index') {
    fs.readFile(__dirname + '/index.html', function (err, html){
        response.end(html);
    });
} else if (categoria == '/teste') {
    fs.readFile(__dirname + '/teste.html', function (err, html){
        response.end(html);
    });
}
});
server.listen(8001, function () {
    console.log('Executando site pessoal');
});
