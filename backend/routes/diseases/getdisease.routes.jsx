const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const diseaseRoutes = express.Router()

let Disease = require('../../models/disease.model')

app.use(cors())
app.use(bodyParser.json())

diseaseRoutes.route('/getdiseases').get(function (req, res) {
    Disease.find(function (err, diseases) {
        if (err) {
            console.log(err)
        } else {
            res.json(diseases)
        }
    })
})

diseaseRoutes.route('/getdisease/:id').get(function (req, res) {

    let id = req.params.id
    Disease.findById(id, function (err, disease) {
        res.json(disease)
    })
});

module.exports = diseaseRoutes
