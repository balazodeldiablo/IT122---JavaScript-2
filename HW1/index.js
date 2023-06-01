const http = require("http"); 
http.createServer((req,res) => {
    var path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page fellas!');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About me!!! This is Andy and this is my first page on nodeJS. REALLY EXCITED ABOUT THIS!!');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Error 404 - Not found');
            break;
    }    
}).listen(process.env.PORT || 3000);
