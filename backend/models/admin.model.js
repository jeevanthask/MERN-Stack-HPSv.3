const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Admin = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Admin', Admin)
