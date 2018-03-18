//Setup of Express Framework
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

_ = require('lodash');
require(__dirname+'/index.js');

//Getting the data into variables from document.json file for displaying the respective rendered pages.
routing = Document['routing'];
tools_used = Document['tools_used'];

//Landing Page
app.get('/', function(req,res){
    res.render('landing',{routing: routing});
});

//Navigating to Tools Used Page
app.get('/tools-used', function(req,res){
    res.render('tools-used', {tools_used: tools_used});
})



app.listen(process.env.PORT, function() {
    console.log("Server started");
  });