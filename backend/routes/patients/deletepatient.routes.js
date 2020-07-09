const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const patientRoutes = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

let Patient = require('../../models/patient.model')

app.use(cors())
app.use(bodyParser.json())

patientRoutes.delete('/deletepatient/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Patient.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Patient Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = patientRoutes
