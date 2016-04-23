var mongoose = require('mongoose');

//Post Schema
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

//Posts Object & Model
module.exports = mongoose.model("Post", postSchema);