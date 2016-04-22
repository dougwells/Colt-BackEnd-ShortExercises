var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo");

//Post Schema
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

//Posts Object & Model
var Post = mongoose.model("Post", postSchema);

//User Collection: email, name
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]     //"embeds" posts into user
});
var User = mongoose.model('User', userSchema);



// var newUser = new User({
//     email: "hermione@hogwarts.com", 
//     name: "Herminone"
//     });
    
// newUser.posts.push({
//     title: "How to make poly juice",
//     content: "Just kidding, go to Potions Class"
// });
    
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });


//add new post to existing user
User.findOne({name: "Herminone"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "Ron vs Harry",
            content: "It is like comparing Goofy to Mickey Mouse"
        });
        user.save(function(err,userWithPosts){
            if(err){
                console.log(err);
            }else{
                console.log(userWithPosts);
            }
        });
    }
});

// var newPost = Post.create({title: "My first post", content:"Coding is fun"}, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });