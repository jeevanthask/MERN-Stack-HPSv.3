const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Symptom = new Schema({
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

module.exports = mongoose.model('Symptom',Symptom)
