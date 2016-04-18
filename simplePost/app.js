var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var myFriends = ["Ted", "Julian", "Paul"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.send('Got it ..');
});

app.get('/friends', function(req, res){
    res.render('friends',{friends: myFriends})
});

app.post('/friends', function(req, res){
    var newFriend = req.body.friendName;
    myFriends.push(newFriend);
    res.redirect('/friends');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Feel the power ...");
});