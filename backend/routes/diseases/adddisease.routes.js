const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const diseaseRoutes = express.Router()

let Disease = require('../../models/disease.model')

app.use(cors())
app.use(bodyParser.json())

diseaseRoutes.route('/adddisease').post(function (req, res) {
    let disease = new Disease(req.body);
    disease.save()
        .then(newdisease => {
            res.status(200).json({'newdisease': 'new disease added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new disease failed')
        })
});


module.exports = diseaseRoutes

