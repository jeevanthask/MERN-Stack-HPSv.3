const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const diseaseRoutes = express.Router()

let Disease = require('../../models/disease.model')

app.use(cors())
app.use(bodyParser.json())

diseaseRoutes.route('/updatedisease/:id').post(function (req, res) {
    Disease.findById(req.params.id, function (err, disease) {
        if (!disease) {
            res.status(404).send('data is not found')
        } else {
            disease.firstname = req.body.firstname
            disease.lastname = req.body.lastname
            disease.description = req.body.description

            disease.save().then(todo => {
                res.json('disease updated')
            })
                .catch(err => {
                    res.status(404).send('disease not updated')
                })
        }
    })
})


module.exports = diseaseRoutes
