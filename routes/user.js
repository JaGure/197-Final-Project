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
        res.send('User needs to log in to achieve this functionality')
    } else {
        next()
    }
})

// gets the current user's *th group from their group array
router.get('/group/*', function (req, res, next) {
    const index = req.originalUrl.slice(12)
    const username = req.session.username

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            next(err)
        } else {
            const id = user.groupIDs[index]
            Group.findById(id, function(err, group) {
                if (err) {
                    next(err)
                } else {
                    res.send({ group: group, id: id })
                }
            })
        }
    })
})

// returns all of the groups associated with the current user
router.get('/groups', function (req, res, next) {
    const username = req.session.username

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            next(err)
        } else {
            res.send({ groups: user.groupNames })
        }
    })
})

// creates a group (with the current user as the creator)
router.post('/create-group', function (req, res, next) {
    const username = req.session.username
    const groupName = req.body.groupName

    const g = new Group({
        groupName: groupName,
        users: [username],
        characters: [],
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
            user.groupNames.unshift(g.groupName)
            user.groupIDs.unshift(g._id)
            user.save(function (err) {
                if (err) {
                    next(err)
                }
            })
        }
    })

    res.send('Group successfully added')
})

module.exports = router