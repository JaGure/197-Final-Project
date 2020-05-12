const express = require('express')
const router = express.Router()

const User = require('../models/user').user

// responds with the current username
router.get('/', function (req, res, next) {
    const username = req.session.username

    if (username == null) {
        res.send({ currentUser: null })
    } else {
        res.send({ currentUser: username })
    }
})

router.get('/groups', function (req, res, next) {
    const username = req.session.username

    if (username == null) {
        res.status(401).send('User needs to log in to get groups')
    }

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            next(err)
        } else {
            res.send({ groups: user.groups })
        }
    })
})

module.exports = router