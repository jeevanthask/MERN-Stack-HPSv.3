const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const patientRoutes = express.Router()

let Patient = require('../../models/patient.model')

app.use(cors())
app.use(bodyParser.json())

patientRoutes.route('/addpatient').post(function (req, res) {
    let patient = new Patient(req.body);
    patient.save()
        .then(newpatient => {
            res.status(200).json({'newpatient': 'newpatient added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding newpatient failed')
        })
});


module.exports = patientRoutes

