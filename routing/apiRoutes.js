// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
var friends = require("../data/friends.js");

module.exports = function (app) {

    


    //     // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //     // Create New friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        console.log(req);
        // most compatible object
        var bestMatch = {};
        // for loop to loop through friends and scores and parses the scores
        for (i = 0; i < newFriends.scores.length; i++) {
            newFriends.scores[i] = parseInt(newFriend.scores[i])
        };
        // index that compares all friends to see if this friend is or isn't the best match
        var friendIndex = 0;
        var friendScoreDiff = 40;
        // nested loop to get total scores for each friend
        for (i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            for (var ii = 0; ii < friends[i].scores.length; ii++) {
                var scoreDiff = Math.abs(friends[i].scores[ii] - newFriend.scores[ii]);
                totalDiff = scoreDiff;
            }
            // best match if current friend is less than next friend set to friendindex
            if (totalDiff < friendScoreDiff) {
                friendIndex = i;
                // set friendscorediff to total diff bc it is the current best match
                friendScoreDiff = totalDiff;
            }
        }
        // set best match equal to friend[index]
        bestMatch = friends[friendIndex];
        // best match
        res.json(bestMatch);
        console.log(bestMatch);
    });
};