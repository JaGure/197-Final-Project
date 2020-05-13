const express = require('express')
const router = express.Router()

const Group = require('../models/group')
const Character = require('../models/character').character

// adds a character to the group passed by the request
router.post('/add-character', function (req, res, next) {
    const groupID = req.body.groupID
    const newCharacter = req.body.character

    Group.findById(groupID, function(err, group) {
        if (err) {
            next(err)
        } else {
            const c = new Character(newCharacter)

            // update group with new character
            group.characters = [c]
            group.save(function (err) {
                if (err) {
                    next(err)
                }
            })
        }
    })

    res.send('Success!')
})

module.exports = router