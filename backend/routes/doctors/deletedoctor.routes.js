const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const doctorRoutes = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

let Doctor = require('../../models/doctor.model')

app.use(cors())
app.use(bodyParser.json())

doctorRoutes.delete('/deletedoctor/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Doctor.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Doctor Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = doctorRoutes
