var express = require('express');
var app = express();

//Make 3 different routes
// "/"          ==> "Hello World!"

app.get("/", function(req, res){
    res.send("Hello World");
});

// "/bye"       ==> "Good Bye"
app.get("/bye", function(req, res){
    res.send("Bye");
});

// "/dog"       ==> "Meow"
app.get("/dog", function(req, res){
    res.send("Meow");
});

// "/r/"       ==> "Welcome to my subreddit"
app.get("/r/:subredditName", function(req, res){

    res.send("Welcome to my subreddit!");
});

// "/r/:subredditName/comments/:id/:title/"
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    var name = req.params.subredditName.toUpperCase();
    var message = "Welcome to the " + name +" Subreddit Page";
    res.send(message);
});

// "/*"     ==> any URL other than those defined above
app.get("/*", function(req, res){
    res.send("You are a STAR!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});


