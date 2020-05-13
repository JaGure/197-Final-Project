const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: { type: String },
    class: { type: String },
    race: { type: String },
    skill: { type: String }
})

module.exports = {
    character: mongoose.model('Character', characterSchema),
    characterSchema: characterSchema
}