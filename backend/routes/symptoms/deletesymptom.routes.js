const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const symptomRoutes = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

let Symptom = require('../../models/symptom.model')

app.use(cors())
app.use(bodyParser.json())

symptomRoutes.delete('/deletesymptom/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Symptom.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Symptom Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = symptomRoutes
