var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')

const dataBaseString = process.env.MONGODB_URI || ''
var mongoDBConnectionString = dataBaseString

mongoose.connect(
  mongoDBConnectionString,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => { console.log('Connected to the database') })
  .catch((err) => { console.error('Error connecting to the database', err) })

var app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/v1', require('./routes'))

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error')
})

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port: ' + server.address().port)
})
