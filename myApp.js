var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

require('dotenv').config();
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

console.log("Hello World");

/*app.get('/',function(req,res){
    res.send("Hello Express")
});*/

var absolutePath = __dirname + "/views/index.html"

app.get('/',function(req,res){
    res.sendFile(absolutePath);
})

app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use(bodyParser.urlencoded({extended:false})});
app.use(bodyParser.json());

var absolutePath2 = __dirname + /public

app.use('/public',express.static());

app.get('/json',function(req,res){
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({
            "message":"Hello json".toUpperCase();
        })
    }else{
        res.json({
            "message":"Hello.json"
        })
    }
})


app.get('/now',function(req,res,next){
    req.time = new Date().toString();
    next();
}, function(req,res){
    res.json({
        "time":"req.time"
    })
})

app.get("/:word/echo",function(req,res){
    res.json({
        echo:req.params.word
    })
})

// app.get("/name",function(req,res){
//     res.json({
//         "name":req.query.first + " " + req.query.last
//     })
// })

app.post("/name",function(req,res){
    res.json({
        "name":req.body.first + " " + req.body.last
    });
})

















 module.exports = app;
