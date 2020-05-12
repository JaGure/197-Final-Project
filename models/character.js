const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({

})

module.exports = {
    character: mongoose.model('Character', characterSchema),
    characterSchema: characterSchema
}