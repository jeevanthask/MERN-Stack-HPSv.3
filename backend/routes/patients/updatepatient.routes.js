const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const patientRoutes = express.Router()

let Patient = require('../../models/patient.model')

app.use(cors())
app.use(bodyParser.json())

patientRoutes.route('/updatepatient/:id').post(function (req, res) {
    Patient.findById(req.params.id, function (err, patient) {
        if (!patient) {
            res.status(404).send('data is not found')
        } else {
            patient.firstname = req.body.firstname
            patient.lastname = req.body.lastname
            patient.email = req.body.email
            patient.gender = req.body.gender
            patient.disease = req.body.disease

            patient.save().then(todo => {
                res.json('patient updated')
            })
                .catch(err => {
                    res.status(404).send('patient not updated')
                })
        }
    })
})


module.exports = patientRoutes
