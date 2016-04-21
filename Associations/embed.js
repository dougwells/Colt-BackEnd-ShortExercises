var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo");

//User Collection: email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String
});
var User = mongoose.model('User', userSchema);

//Post Collection: title, content

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

// var newUser = User.create({email: "bob@yahoo.com", name: "Bob"}, function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

var newPost = Post.create({title: "My first post", content:"Coding is fun"}, function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});