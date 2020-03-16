// Express-Bibliothek importieren
var express = require('express');

// Animals-Router importieren
var animalRouter = require('./routes/animals')

var dbURI = "mongodb://localhost:27017/animalshelter"

// Mongoose-Bibliothek importieren
var mongoose = require('mongoose');

// Server erstellen
var app = express()

// Mit der Datenbank verbinden
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', console.error)

mongoose.connection.on('open', () => {
    console.log('Datenbankverbindung hergestellt')
})

// Parsen des Body in POST aktivieren
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Den Router für Animals einbinden
app.use('/animals', animalRouter)

module.exports = app;