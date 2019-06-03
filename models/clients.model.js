var mongoose = require( 'mongoose' );

let ClientsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Date,
    avatar: String,
    bio: String,
    location: Number,
    skill_level: Number,
    running_scheme: Number,
    practice_time: Number,
});


const Clients = mongoose.model('Clients', ClientsSchema);



module.exports = Clients;