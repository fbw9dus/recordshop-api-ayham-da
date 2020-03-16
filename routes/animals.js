var express = require('express')
// Controller-Funktionen für animals inportieren
var animalsControllers = require('../controllers/animals')

// Die Express-Router-Klasse speichern
var router = express.Router()

// URL für alle Documents
router.get('/', animalsControllers.getAnimals)

// URL um neues Docuemnt zu erstellen
router.post('/', animalsControllers.createAnimal)

// URL um bestimmtes Document zu holen
router.get('/:id', animalsControllers.getAnimal)

// URL um Document zu löschen
router.delete('/:id', animalsControllers.deleteAnimal)

// URL um Document zu aktualisieren
router.put('/:id', animalsControllers.updateAnimal)

module.exports = router