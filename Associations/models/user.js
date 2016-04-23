var mongoose = require('mongoose');

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

module.exports = User;