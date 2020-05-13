const mongoose = require('mongoose')

const userSchema = require('./user').userSchema
const characterSchema = require('./character').characterSchema

const groupSchema = new mongoose.Schema({
    groupName: { type: String },
    users: { type: [userSchema] }, 
    characters: { 
        type: Map, 
        of:  characterSchema}, // map of users to characters
    DM: { type: String },    
})

module.exports = mongoose.model('Group', groupSchema)