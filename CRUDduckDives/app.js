var express         = require('express'),
    app             = express(),
    mongoose        = require('mongoose'),
    ejs             = require('ejs'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');
    
//create & connect to database & configure imported packages    
mongoose.connect("mongodb://localhost/duck_dive_app");
app.use(bodyParser.urlencoded({extended: true}));  //remember: bracket notation!
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride('_method'));
    
//set up model & schema
var duckSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String
});
var Duck = mongoose.model("Duck", duckSchema);

//Routes

//homepage
app.get('/', function(req, res){
    res.render("home");
});

// new:         get new.js          /duckDives/new
app.get('/ducks/new', function(req, res){
   res.render('new'); 
});

// create:      post & redirect     /duckDives
app.post('/ducks', function(req, res){
    Duck.create(req.body.duck, function(err, duck){
        if(err){
            console.log(err);
        }else{
            res.redirect('/ducks');
        }
    });
});

// show all:    get index.js        /duckDives
app.get('/ducks', function(req, res){
    Duck.find({}, function(err, allDucks){
        if(err){console.log(err);
        }else{
            res.render("index", {ducks: allDucks});
        }
    });
});

// show one:    get show.js         /duckDives/:id
app.get('/ducks/:id', function(req, res){
    Duck.findOne({_id:req.params.id}, function(err, duck){
        if(err){
            console.log(err);
        }else{
            res.render('show', {duck});
        }
    });
});



// edit:        get edit.sj         /duckDives/:id/edit
app.get('/ducks/:id/edit', function(req, res){
        Duck.findOne({_id:req.params.id}, function(err, duck){
        if(err){
            console.log(err);
        }else{
            res.render('edit', {duck});
        }
    });
});

// update:      put & redirect      /duckDives/:id
app.put('/ducks/:id', function(req, res){
    Duck.findByIdAndUpdate(req.params.id, req.body.duck, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.redirect("/ducks");
        }
    });
});


// destroy      delete & redirect   /duckDives/:id
app.delete('/ducks/:id', function(req, res){
    Duck.findByIdAndRemove(req.params.id, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.redirect('/ducks');
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Lets Duck Dive !!")
})