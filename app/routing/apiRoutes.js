

var path = require("path");


var friends = require('../data/friends.js') ;  


module.exports = function (app) {
    //return JSON  api friends
    app.get("/api/friends", function (req, res) {
        //console.log(" this is export friends" ,friends);
        return res.json(friends);
    });

}









// var myQuestions = [
//     "You would rather be poor and help people over becoming incredibly rich by hurting people?",
//     "You feel skydiving should be an item on everyone's bucketlist",
//     "You feel it is better to always tell the truth, and sometimes hurt other peoples feeling, over telling a fib",
//     "You would prefer to live in the wilderness far from civilization over living on the streets of a city as a homeless person"
// ];

