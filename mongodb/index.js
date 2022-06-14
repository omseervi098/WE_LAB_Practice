var express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
const app=express()
const parser=bodyParser.urlencoded({extended:true})
mongoose.connect('mongodb://localhost:27017/lab-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
var schema=mongoose.Schema
const employee=mongoose.model('employee_name',new schema({
    fname:String,
    lname:String
}),'employee');

app.get('/',function(req,res){
    res.sendFile(__dirname+'/form.html')
})
app.get('/data',function(req,res){
    employee.find({},function(err,col){
        if(err) console.log(err)
        res.send(col)
    })
})
app.post('/fill-data',parser,function(req,res){
    const data={
        fname:req.body.fname,
        lname:req.body.lname
    }
    employee.insertMany(data,function(err,value){
        if(err) console.log(err)
        else 
        console.log("saved !! ");
    })
    res.redirect('/data')
})
app.listen(8080)