var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//connect to mongo database  //define view engine
mongoose.connect("mongodb://localhost/blogging_two");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

//create blog schema
var blogSchema = new mongoose.Schema({
    author: String,
    subject: String,
    description: String,
    imageUrl: String
});

var Blog = mongoose.model("Blog", blogSchema);

//Home page
app.get('/', function(req, res){
    res.send('Welcome to the main page');
    
});

//Show all blogs
app.get('/blogs', function(req, res){
        Blog.find({}, function(err, blogs){
            if(err){console.log('error')
        }else{
          res.render('index', {blogs}); 
        }
    });
    
});



//show new blog post form
app.get('/blogs/new', function(req, res){
    res.render('new');
});

//Add new blog post
app.post('/blogs', function(req, res){
    var author = req.body.author;
    var subject = req.body.subject;
    var imageUrl = req.body.imageUrl;
    var description = req.body.description;
    Blog.create({author:author, subject: subject, imageUrl:imageUrl, description:description}, function(err, blog){
        if (err){res.send("oops, error")
        }else{
            res.redirect('/blogs');
        }
    });
    // res.send("Post request received");
});

//Edit existing blog post
app.get('/blogs/:id/edit', function(req, res){

    Blog.findById(req.params.id, function(err, blog){
            if(err){console.log("error");
        }else{
            res.render('edit',{blog:blog});
        }
    });
});


//show 1 blog post
app.get('/blogs/:id', function(req, res){
    Blog.findById(req.params.id, function(err, blog){
            if(err){console.log("error");
        }else{
            res.render('show',{blog})
        }
    });
});

//Change 1 blog post
app.put('/blogs/:id', function(req, res){

    Blog.findByIdAndUpdate(req.params.id, req.body.editedBlog, function(err, blog){
            if(err){console.log("error");
        }else{
            res.redirect('/blogs/'+req.params.id);
        }
    });
});

//Delete 1 blog post
app.delete('/blogs/:id', function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err, blog){
        if (err){
            console.log('error');
        }else{
            res.redirect('/blogs');
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Back to CRUDing!!!");
});