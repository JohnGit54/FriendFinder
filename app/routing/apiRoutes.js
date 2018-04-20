

var path = require("path");
var bodyParser = require('body-parser');


var friends = require('../data/friends.js');


module.exports = function (app) {
    //return JSON  api friends
    app.get("/api/friends", function (req, res) {
        //console.log(" this is export friends" ,friends);
        return res.json(friends);
    });

    //post user information json - perform all logic
    app.post("/api/friends", function (req, res) {
        console.log("in api routes post");
        var userObject = req.body;
        console.log(userObject);


        var holdDifference = 60; // has to be numb larger than 50,want lowest diff
        var matchFrnObj = null;  // will hold closest match friend object
        var friendDiff = 0; // this is running tally of from friend ten scores.. reset with each new friend


        //friends is an array of objects.
        // in the object scores is an array 
        // need 2 level for loop for all scores
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            friendDiff = 0;
            for (let j = 0; j < element.scores.length; j++) {
                friendDiff += Math.abs(element.scores[j] - userObject.scores[j]);
            }
            console.log(" user ", element.name , " tally-dif " , friendDiff );
            if (friendDiff< holdDifference){
                holdDifference = friendDiff;
                matchFrnObj = element;
            }
        }

        console.log("Closest match" , matchFrnObj.name);
        friends.push(userObject);
        return res.json(matchFrnObj);
    });


}





