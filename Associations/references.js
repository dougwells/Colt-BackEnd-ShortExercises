var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo_2");

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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, //"references" posts into user
            ref: "Post"
    }
    ]
});
var User = mongoose.model('User', userSchema);

Post.create({
    title: "Part 3: How to cook the best burgers",
    content: "Serve Medium Rare.  Right off the grill"
}, function(err, post){
    if(err){
        console.log(err);
    }else{
        User.findOne({email:"bob@yahoo.com"}, function(err,foundUser){
           if(err){
               console.log(err);
           }else{
               foundUser.posts.push(post),
               foundUser.save(function(err,data){
                   if(err){
                       console.log(err);
                   }else{
                       console.log(data);
                   }
               });
           }
        });
    }
});

// User.create({
//     name: "Bob Belchan",
//     email: "bob@yahoo.com"
//     });
