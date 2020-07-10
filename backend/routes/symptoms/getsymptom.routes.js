const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const symptomRoutes = express.Router()

let Symptom = require('../../models/symptom.model')

app.use(cors())
app.use(bodyParser.json())

symptomRoutes.route('/getsymptoms').get(function (req, res) {
    Symptom.find(function (err, symptoms) {
        if (err) {
            console.log(err)
        } else {
            res.json(symptoms)
        }
    })
})

symptomRoutes.route('/getsymptom/:id').get(function (req, res) {

    let id = req.params.id
    Symptom.findById(id, function (err, symptom) {
        res.json(symptom)
    })
});

module.exports = symptomRoutes
