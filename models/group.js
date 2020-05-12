const mongoose = require('mongoose')

const userSchema = require('./user').userSchema
const characterSchema = require('./character').characterSchema

const groupSchema = new mongoose.Schema({
    groupName: { type: String },
    groupID: { type: String },
    users: { type: [userSchema] }, 
    characters: { 
        type: Map, 
        of:  characterSchema}, // map of users to characters
    DM: { type: userSchema },    
})

module.exports = mongoose.model('Group', groupSchema)