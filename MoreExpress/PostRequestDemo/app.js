var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Ted", "Julian", "Paul"];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('home');
});

app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    friends.push(req.body.newfriend);
    res.redirect('/friends')
});

app.get("/friends", function(req, res){

    res.render('friends', {friends:friends});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("All systems GO");
});