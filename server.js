const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')

const User = require('./models/user').user
const Group = require('./models/group')

// instantiating express app 
const app = express()

// instantiate a mongoose connect call
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/dnd',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

app.use(express.static(path.join(__dirname, './dist')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(
    cookieSession({
        name: 'session',
        keys: ['spookyScary'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
)

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});