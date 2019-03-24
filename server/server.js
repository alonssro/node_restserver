require('../config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('Hello World')
})

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
})