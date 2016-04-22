var mongoose = require('mongoose');

//create db and connect to it
var blog_demo=mongoose.connect("mongodb://localhost/blog_demo")

//create schema for user collection
var userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// create model for User collection
var User = mongoose.model("User", userSchema);

//create first User

User.create({
    name: "Eric",
    email: "eric@indep.com"
}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
    
})

