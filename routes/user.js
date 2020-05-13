const express = require('express')
const router = express.Router()

const User = require('../models/user').user
const Group = require('../models/group')

// responds with the current username
router.get('/', function (req, res, next) {
    const username = req.session.username

    if (username == null) {
        res.send({ currentUser: null })
    } else {
        res.send({ currentUser: username })
    }
})

// middleware that checks if the user is logged in 
router.use('/', function (req, res, next) {
    const username = req.session.username

    if (username == null) {
        res.status(401).send('User needs to log in to achieve this functionality')
    } else {
        next()
    }
})

router.get('/groups', function (req, res, next) {
    const username = req.session.username

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            next(err)
        } else {
            res.send({ groups: user.groups })
        }
    })
})

router.post('/create-group', function (req, res, next) {
    const username = req.session.username
    const groupName = req.body.groupName

    var g = new Group({
        groupName: groupName,
        users: [username],
        characters: new Map(),
        DM: username,
    })

    // add new group to db
    g.save(function (err) {
        if (err) {
            next(err)
        }
    })

    // updating user's group list
    User.findOne({ username: username }, function(err, user) {
        if (err) {
            next(err)
        } else {
            user.groups.unshift(g._id)
            user.save(function (err) {
                if (err) {
                    next(err)
                }
            })
        }
    })

    res.status(200).send('Group successfully added')
})

module.exports = router