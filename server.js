const http = require('http'),
    url = require('url'),
    util = require('util');

function reqHandler(req,res){
    let path = url.parse(req.url).pathname;
    console.log(path);
    if(path=='/'){
        res.writeHead(200,{'Content Type': 'text/html'});
        res.write('!<doctype <html></html>' + '<head></head>' + '<body>' + '<h2>NodeJS is Fun!</h2>'+
        '</body>' + '</html>');
    }
    else if(path = '/about'){
        res.writeHead (200, {'Content-Type': 'text/plain'});
        res.write('about page');
    }else{
        res.writeHead(404,  {'Content-Type': 'text/plain'});
        res.write("404 Error Page");
    }
    res.end();
};

const server = http.createServer(reqHandler);
server. listen (3000, () =>{
console.log('Server is listening on port 3000');
})
