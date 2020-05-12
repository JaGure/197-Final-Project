const express = require('express')
const router = express.Router()

const User = require('../models/user').user

const hashPassword = require('../helpers/hashPassword').hashPassword

router.post('/signup', function(req, res, next) {
    var username = req.body.username
    var password = hashPassword(req.body.password)

    // check if the user is in the database, add them if so
    // the response sent will be used by the frontend to tell the user if a username is already taken
    User.find({ username: username }, function(err, result) {
        if (err) {
            next(err)
        } else if (result.length !== 0) {
            res.send({ containedUser: true })
        } else {
            var u = new User({
                username: username, 
                password: password,
                groups: []
            })
        
            // add user to db
            u.save(function(err) {
              if (!err) {
                res.send({ containedUser: false })
              } else {
                next(err)
              }
            })
        }
    })

  })

module.exports = router