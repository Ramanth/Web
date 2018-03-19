//Setup of Express Framework
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(express.static('public'))

_ = require('lodash');
require(__dirname+'/index.js');

//Getting the data into variables from document.json file for displaying the respective rendered pages.
routing = Document['routing'];
tools_used = Document['tools_used'];

//
app.get('/', function(req,res){
    res.render('index');
});
//Landing Page
app.get('/rth', function(req,res){
    res.render('landing',{routing: routing});
});

//Navigating to Tools Used Page
app.get('/tools-used', function(req,res){
    res.render('tools-used', {tools_used: tools_used});
});


//Navigating to Plan of Action Page
app.get('/plan', function(req,res){
    res.render('plan');
});

//Navigating to Documentation Page
app.get('/documentation', function(req,res){
    res.render('documentation');
})


app.post('/api-service-centers-listing', function(req,res){
    var x = req.body;
    console.log(req);
    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=17.418185,78.344226&radius=3000&types=car_repair&keyword=bike+repair+service+car&key=AIzaSyBE2zHLDa_2pBn3CcF6YeSeA6-5gNOSCx4';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body)
            res.send(results);
        }
    })

});


app.listen(process.env.PORT||5000, function() {
    console.log("Server started");
  });