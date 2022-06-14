var http = require("http");
var fs = require("fs");
var url=require('url');
http.createServer(function (req, res) {
    fs.readFile("form.html", function (err, data) {
        if(err) throw err;
      var q=url.parse(req.url,true);
      res.writeHead(200, { "Content-Type": "text/html" });
      console.log('Server Running on localhost ');
      res.write(data+"submiited information: "+q.pathname);
      res.end();
    });
}).listen(3000);
