const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const diseaseRoutes = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

let Disease = require('../../models/disease.model')

app.use(cors())
app.use(bodyParser.json())

diseaseRoutes.delete('/deletedisease/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Disease.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Disease Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = diseaseRoutes
