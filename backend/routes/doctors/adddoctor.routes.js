const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const doctorRoutes = express.Router()

let Doctor = require('../../models/doctor.model')

app.use(cors())
app.use(bodyParser.json())

doctorRoutes.route('/adddoctor').post(function (req, res) {
    let doctor = new Doctor(req.body);
    doctor.save()
        .then(newdoctor => {
            res.status(200).json({'newdoctor': 'new doctor added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new doctor failed')
        })
});


module.exports = doctorRoutes

