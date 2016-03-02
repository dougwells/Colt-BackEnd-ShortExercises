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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});


