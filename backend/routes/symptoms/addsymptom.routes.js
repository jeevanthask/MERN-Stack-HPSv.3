const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const symptomRoutes = express.Router()

let Symptom = require('../../models/symptom.model')

app.use(cors())
app.use(bodyParser.json())

symptomRoutes.route('/addsymptom').post(function (req, res) {
    let symptom = new Symptom(req.body);
    symptom.save()
        .then(newsymptom => {
            res.status(200).json({'newsymptom': 'newsymptom added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding newsymptom failed')
        })
});


module.exports = symptomRoutes

