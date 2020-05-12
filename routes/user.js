const express = require('express')
const router = express.Router()

const User = require('../models/user').user

// responds with the current account name
router.get('/', function (req, res, next) {
    if (req.session.username == null) {
        res.send({ currentUser: null })
    } else {
        res.send({ currentUser: req.session.username })
    }
})

module.exports = router