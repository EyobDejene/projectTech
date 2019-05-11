let mongoose = require('mongoose');

const server   = process.env.DB_SERVER;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

mongoose.connect(`mongodb+srv://${username}:${password}@${server}/${database}?retryWrites=true`, { useNewUrlParser: true,useCreateIndex: true});

let UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});



module.exports = mongoose.model('Users', UsersSchema);