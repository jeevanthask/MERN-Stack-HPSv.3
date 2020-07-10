const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const symptomRoutes = express.Router()

let Symptom = require('../../models/symptom.model')

app.use(cors())
app.use(bodyParser.json())

symptomRoutes.route('/updatesymptom/:id').post(function (req, res) {
    Symptom.findById(req.params.id, function (err, symptom) {
        if (!symptom) {
            res.status(404).send('data is not found')
        } else {
            symptom.firstname = req.body.firstname
            symptom.lastname = req.body.lastname
            symptom.description = req.body.description

            symptom.save().then(todo => {
                res.json('symptom updated')
            })
                .catch(err => {
                    res.status(404).send('symptom not updated')
                })
        }
    })
})


module.exports = symptomRoutes
