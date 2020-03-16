var Animal = require('../models/Animal')

exports.createAnimal = async (req, res) => {
    var data = req.body
    // Neues Tier in die DB hinzufügen
    var animal = new Animal(data)
    await animal.save()
    // Zur Bestätigung neues Document als Antwort schicken
    res.status(200).send(animal)
}

exports.getAnimals = async (req, res) => {
    // Alle Documents aus Collection holen
    var animals = await Animal.find()
    // Array als Antwort schicken
    res.status(200).send(animals)
}

exports.getAnimal = async (req, res) => {
    // id aus URL speichern
    var id = req.params.id
    // Document mit dieser id aus Collection holen
    var animal = await Animal.findById(id)
    // Objekt als Antwort schicken
    res.status(200).send(animal)
}

exports.deleteAnimal = async (req, res) => {
    // id aus URL speichern
    var id = req.params.id
    // Document mit dieser id aus Collection löschen
    var animal = await Animal.findByIdAndDelete(id)
    // Zur Bestätigung Objekt als Antwort schicken
    res.status(200).send(animal)
}

exports.updateAnimal = async (req, res) => {
    // id aus URL speichern
    var id = req.params.id
    // Daten aus Request-Body speichern
    var data = req.body
    // Document mit dieser id mit Daten aus req.body in Collection aktualisieren
    var animal = await Animal.findByIdAndUpdate(id, data, {new: true})
    // Zur Bestätigung Objekt als Antwort schicken
    res.status(200).send(animal)
}