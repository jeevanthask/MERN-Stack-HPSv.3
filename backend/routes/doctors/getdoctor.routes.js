const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const doctorRoutes = express.Router()

let Doctor = require('../../models/doctor.model')

app.use(cors())
app.use(bodyParser.json())

doctorRoutes.route('/getdoctors').get(function (req, res) {
    Doctor.find(function (err, doctors) {
        if (err) {
            console.log(err)
        } else {
            res.json(doctors)
        }
    })
})

doctorRoutes.route('/getdoctor/:id').get(function (req, res) {

    let id = req.params.id
    Doctor.findById(id, function (err, doctor) {
        res.json(doctor)
    })
});

module.exports = doctorRoutes
