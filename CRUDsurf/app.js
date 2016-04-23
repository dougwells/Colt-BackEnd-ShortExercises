//import needed packages
var express         = require('express'),
    app             = express(),
    mongoose        = require('mongoose'),
    ejs             = require('ejs'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

//create &/or connect to database & configure imported packages    
mongoose.connect("mongodb://localhost/surf_app");
app.use(bodyParser.urlencoded({extended: true}));  //remember: bracket notation!
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride('_method'));


//schema for surfers collection
var surferSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String
});

//create surfers collection with 
var Surfer = mongoose.model("Surfer", surferSchema);



//Routes

//Homepage
app.get('/', function(req, res){
    res.render('home');
});

//Index of all surf sites.  File index.js
app.get('/surfers', function(req, res){
    Surfer.find({}, function(err,allSurfers){
        if(err){
            console.log(err);
        }else{
            res.render('index', {allSurfers});
        }
    });
});

//Create new surfer.  Uses show.ejs
app.get('/surfers/new', function(req, res){
    res.render('new');
});

//Save new surfer.  Post to /surfers then redirect
app.post('/surfers', function(req, res){
    Surfer.create(req.body.surfer, function(err, surfer){
        if(err){
            console.log(err);
        }else{
            console.log(surfer);
            res.redirect('/surfers');
        }
    });
});

//Show one surfer
app.get('/surfers/:id', function(req, res){
  Surfer.findOne({_id: req.params.id}, function(err, oneSurfer){
      if(err){
          console.log(err);
      }else{
          res.render('show', {oneSurfer});
      }
  }); 
});



    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Surfs Up !!! ");
});
    