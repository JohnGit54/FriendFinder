//Dependencies
var express = require("express");
//var mysql = require("mysql");
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
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// //mySql DB Connection information
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "seinfeld_db"
// });


// //initiate MYSQL connection
// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// })



var myQuestions = [
    "You would rather be poor and help people over becoming incredibly rich by hurting people?",
    "You feel skydiving should be an item on everyone's bucketlist",
    "You feel it is better to always tell the truth, and sometimes hurt other peoples feeling, over telling a fib",
    "You would prefer to live in the wilderness far from civilization over living on the streets of a city as a homeless person"
];







// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


//display api friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
