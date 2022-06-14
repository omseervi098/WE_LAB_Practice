var express=require('express')
var bodyParser=require('body-parser')
app=express()
const parser=bodyParser.urlencoded({extended:true})
port=8080
app.get('/',function(req,res){
    res.sendFile(__dirname+"/form.html")
})
app.post('/info',parser,function(req,res){
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
app.listen(port)