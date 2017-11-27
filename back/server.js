var express = require('express'),
app = express(),
port = process.env.PORT || 4021,
bodyParser = require('body-parser');

console.log('todo list RESTful API server started on: ' + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var routes = require('./api/routes/validationRoutes'); //importing route
routes(app); //register the route


app.listen(port);

module.exports = app;