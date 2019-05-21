var mongoose = require( 'mongoose' );

let UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

const User = mongoose.model('Users', UsersSchema);

module.exports = User;