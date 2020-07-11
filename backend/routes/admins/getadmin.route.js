const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const adminRoutes = express.Router()

let Admin = require('../../models/admin.model')

app.use(cors())
app.use(bodyParser.json())

adminRoutes.route('/getadmins').get(function (req, res) {
    Admin.find(function (err, admins) {
        if (err) {
            console.log(err)
        } else {
            res.json(admins)
        }
    })
})

adminRoutes.route('/getadmin/:id').get(function (req, res) {

    let id = req.params.id
    Admin.findById(id, function (err, admin) {
        res.json(admin)
    })
});

module.exports = adminRoutes
