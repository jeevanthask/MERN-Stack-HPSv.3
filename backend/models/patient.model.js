const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Patient = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    gender:{
        type:String
    },
    disease:{
        type:String
    }
});

module.exports = mongoose.model('Patient',Patient)
