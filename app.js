var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);
var appRouter  = function(app)  {
    app.get('/', function(req,res)  {
        res.send("Welcome to our restful api");
    });
}

module.exports = appRouter;

var server = app.listen(3000, function()  {
    console.log("Node server is running...");
});