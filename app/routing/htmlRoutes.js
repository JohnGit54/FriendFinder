//Add the require path
var path = require("path");


module.exports = function (app) {

    //console.log("in html route.js __dirname: ", __dirname);
    //console.log('(path.join(__dirname, "../public/survey.html")' , path.join(__dirname, "../public/survey.html") );

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // Basic route that sends the user first to the AJAX Page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


}





