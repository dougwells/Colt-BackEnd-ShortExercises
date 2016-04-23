var mongoose = require('mongoose');
var Post = require('./models/post.js');
var User = require('./models/user.js');
var ObjectId = require('mongoose').Types.ObjectId; 

mongoose.connect("mongodb://localhost/blog_demo_2");


Post.create({
    title: "Part 4: How to cook the best burgers",
    content: "Don't forget the condiments"
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

//Populate posts in user object
// User.findOne({email: "bob@yahoo.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user)
//     }
// });

//find all posts for that user

// User.create({
//     name: "Bob Belchan",
//     email: "bob@yahoo.com"
//     });
