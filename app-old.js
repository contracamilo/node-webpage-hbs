const http = require('http');


http.createServer((req, res) => {
    

    res.writeHead(200, { 'Content-type': 'application/json' });

    let output = {
        name: 'Django',
        lastName: 'Negrus',
        doc: '9283294',
        url: req.url
    }

    res.write(JSON.stringify(output));
    //res.write('hello');

    res.end();

}).listen(4200);

console.log('Listening on port: 4200');

