const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/HPSvthree', {useNewUrlParser: true})
const connection = mongoose.connection

connection.once('open', function () {
    console.log('mongodb connection established successfully')
})

app.use('/HPSvthree/admin',require('./routes/patients/addpatient.routes'))
app.use('/HPSvthree/admin',require('./routes/patients/getpatient.routes'))
app.use('/HPSvthree/admin',require('./routes/patients/updatepatient.routes'))
app.use('/HPSvthree/admin',require('./routes/patients/deletepatient.routes'))

app.use('/HPSvthree/admin',require('./routes/doctors/adddoctor.routes'))
app.use('/HPSvthree/admin',require('./routes/doctors/getdoctor.routes'))
app.use('/HPSvthree/admin',require('./routes/doctors/updatedoctor.routes'))
app.use('/HPSvthree/admin',require('./routes/doctors/deletedoctor.routes'))

app.use('/HPSvthree/admin',require('./routes/symptoms/addsymptom.routes'))
app.use('/HPSvthree/admin',require('./routes/symptoms/getsymptom.routes'))
app.use('/HPSvthree/admin',require('./routes/symptoms/updatesymptom.routes'))
app.use('/HPSvthree/admin',require('./routes/symptoms/deletesymptom.routes'))

app.use('/HPSvthree/admin',require('./routes/symptoms/addsymptom.routes'))


app.listen(PORT, function () {
    console.log('server is running in port ' + PORT)
})
