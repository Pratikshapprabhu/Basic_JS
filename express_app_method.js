var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser.json());


app.get('/',function(req, res){
    res.send("Welcome to express");
});

app.post('/',function(req, res){
    let stud_name = req.body.stud_name;
    res.send(stud_name + ' Welcome to MCA department');
});

app.listen(3000);
console.log('Server started');