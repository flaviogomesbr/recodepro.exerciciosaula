let http = require('http');

    let server = http.createServer(function(req, res) {
        let categoria = req.url;


        if (categoria == '/front-end') {
            res.end(
            '<html><body>Tecnologias Front End: TypeScript, Angular, React..</body></html>'
            );
        } else if (categoria == '/back-end') {
            res.end(
            '<html><body>Tecnologias Back End: NodeJS, Phyton, PHP, MySQL..</body></html>'
            );
        } else if (categoria == '/infraestrutura') {
            res.end(
            '<html><body>Azure Cloud, Linux, MySQL</body></html>'
            );

        } else {
            '<html><body>Programador Full StackL</body></html>'
        }
});

server.listen(8001);
