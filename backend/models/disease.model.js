const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Disease = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Disease',Disease)
