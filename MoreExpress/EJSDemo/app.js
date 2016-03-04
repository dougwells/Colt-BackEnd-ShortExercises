var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
  var love =  req.params.thing;
  res.render("love.ejs", {
      love: love, 
      surfingURL: "http://surfcabarete.com/wp-content/uploads/2013/02/duckdive.jpeg",
      skiingURL: "http://lorrainehuber.com/wp-content/uploads/2009/01/lori-skiing-sepp-mallaun.jpg"
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running as commanded");
});