var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('./example.txt',function(err,data){
        if(err) throw err;
        console.log("Reading file ...")
        res.write(data);
        return res.end();
    })
    fs.unlink('example.txt',function(err){
        if(err) throw err;
        console.log('file deleted');
    })
}).listen(3000);