var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
  var love =  req.params.thing;
  res.render("love.ejs", {
    love:love
  });
});

app.get("/posts", function(req, res){
    var postsOut = [
        {title:"Dogs are awesome", author:"Linda"},
        {title:"Learn to drive a stick", author:"Sierra"},
        {title:"Breaking the 6 minute mile", author: "Savannah"}
        ]
        
        res.render("posts.ejs", {postsIn:postsOut});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running as commanded");
});