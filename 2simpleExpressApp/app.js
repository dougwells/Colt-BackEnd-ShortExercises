var express = require('express');
var app = express();



app.get('/speak/:animal', function(req,res){
    if (req.params.animal == "pig"){res.send("Oink, Oink");}
    if (req.params.animal == "cow"){res.send("Moo Moo");}
    if (req.params.animal == "dog"){res.send("Bark Bark ...err excuse me ... Woof Woof!");}
});

app.get('/repeat/:phrase/:repeat', function(req, res){
    var message = "";
        for(var i=1; i<=req.params.repeat; i++){
            message = message + " " + req.params.phrase;
        }
        res.send(message);
});

app.get('/', function(req,res){
    res.send("Hi there ... Doug is back in Colts Bootcamp!");
});

app.get('/*', function(req, res){
    res.send("Hi there.  What are you doing today?");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Back in the game ...!")
});