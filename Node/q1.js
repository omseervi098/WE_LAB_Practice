var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<html><body><H1>Hello world</H1></body></html>");
    res.end();
}).listen(8080);