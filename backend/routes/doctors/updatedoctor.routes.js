const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const doctorRoutes = express.Router()

let Doctor = require('../../models/doctor.model')

app.use(cors())
app.use(bodyParser.json())

doctorRoutes.route('/updatedoctor/:id').post(function (req, res) {
    Doctor.findById(req.params.id, function (err, doctor) {
        if (!doctor) {
            res.status(404).send('data is not found')
        } else {
            doctor.firstname = req.body.firstname
            doctor.lastname = req.body.lastname
            doctor.email = req.body.email
            doctor.speciality = req.body.speciality

            doctor.save().then(todo => {
                res.json('doctor updated')
            })
                .catch(err => {
                    res.status(404).send('doctor not updated')
                })
        }
    })
})


module.exports = doctorRoutes
