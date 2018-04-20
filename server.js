//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

//create express app instance
var app = express();

//set the port of application
//process.env.POT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//set up routes
console.log(" server.js __dirname: ", __dirname) ;
require(path.join(__dirname,'/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname,'/app/routing/htmlRoutes.js'))(app);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});



