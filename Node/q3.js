var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('./ex.txt',function(err,data){
        if(err) throw err;
        console.log("Reading file ...")
        res.write(data);
        return res.end();
    })
}).listen(3000);