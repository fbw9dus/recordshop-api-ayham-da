var mongoose = require('mongoose')

var animalSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number
})

// Dokument-Vorlage aus Schema (Model)
var animalModel = mongoose.model('Animal', animalSchema)

module.exports = animalModel