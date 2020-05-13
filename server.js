const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')

const User = require('./models/user').user
const Group = require('./models/group')

const accountRouter = require('./routes/account')
const userRouter = require('./routes/user')

// instantiating express app 
const app = express()

// instantiate a mongoose connect call
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dnd', { useNewUrlParser: true, useUnifiedTopology: true }
    .catch(err => console.log(err))
)

app.use(express.static(path.join(__dirname, './dist')))

// allows requests from react to work
// need extended to be true and need the JSON body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
    cookieSession({
        name: 'session',
        keys: ['spookyScary'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
)

// Routers
app.use('/account', accountRouter)
app.use('/user', userRouter)

// Catch all for all other get requests
app.get('*', function (_, res) {
    return res.send()
})

// Middleware for catching any errors
app.use(function (err, _, res) {
    if (err) {
        return res.send('ERROR :  ' + err.message)
    }
})

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});