var mongoose = require( 'mongoose' );

let UsersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    avatar: String,
    bio: String,
    location: Number,
    skill_level: Number,
    running_scheme: Number,
    practice_time: Array,
    match_date: { type: Date, default: Date.now },
});

// var UserModel = mongoose.model('User',UserSchema);
//
// var id = "5ce3f88e999ecf8057cf893c";
// UserModel.findById(id, function (err, user) {
//     console.log("deleted");
// } );
const User = mongoose.model('Users', UsersSchema);



module.exports = User;