const { AsyncLocalStorage } = require('async_hooks');
var http=require('http');
var cal=require('./q2_module');
http.createServer(function(req,res){
    res.write("addition of two no: " + cal.add(10,9));
    res.end();
}).listen(8080);