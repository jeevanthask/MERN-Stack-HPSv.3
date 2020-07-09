const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const patientRoutes = express.Router()

let Patient = require('../../models/patient.model')

app.use(cors())
app.use(bodyParser.json())

patientRoutes.route('/getpatients').get(function (req, res) {
    Patient.find(function (err, patients) {
        if (err) {
            console.log(err)
        } else {
            res.json(patients)
        }
    })
})

patientRoutes.route('/getpatient/:id').get(function (req, res) {

    let id = req.params.id
    Patient.findById(id, function (err, patient) {
        res.json(patient)
    })
});

module.exports = patientRoutes
