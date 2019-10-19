// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

var friends = require("../data/friends");




// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
 
  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});

