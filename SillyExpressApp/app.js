var express = require('express');
var app = express();

// "/" printes "Hi There"

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

//animal speaking section
app.get("/speak/:animal", function(req, res){
    var says =""
    if(req.params.animal ==="pig"){say="Oink";}
    if(req.params.animal ==="cow"){say="Moo";}
    if(req.params.animal ==="dog"){say="Woof Woof!";}
    var message = "The "+req.params.animal+" says '"+say+"'";
    res.send(message);
});

//repeat section
app.get("/repeat/:phrase/:repeat", function(req, res){
    var phrase = req.params.phrase;
    var repeat = Number(req.params.repeat);
    var message = ""
    for (var i=0; i<repeat; i++){
        message = phrase +" "+message;
    }
    res.send(message);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found.  What are you doing with your life ...?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});