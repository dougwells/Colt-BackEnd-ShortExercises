var express = require("express");
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home")
});

app.get("/fallinlovewith/:love", function(req, res){
  var love =  req.params.love;
  res.render("love.ejs", {
      love: {
          sport:love,
          surfing: "http://www.surfing-waves.com/forum/images/up/1130486538_1.jpg",
          skiing: "http://lorrainehuber.com/wp-content/uploads/2009/01/lori-skiing-sepp-mallaun.jpg"
      }
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