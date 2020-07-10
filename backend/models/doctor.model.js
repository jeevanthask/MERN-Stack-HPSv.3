const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Doctor = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Doctor',Doctor)
