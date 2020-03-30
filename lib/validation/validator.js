const {check} = require('express-validator')

exports.userValdationRules = [
    //
    check('email')
        .isEmail()
        .withMessage('Bitte prüf deine Email-Adresse'),

    //
    check('firstName')
        .exists()
        .withMessage('Vorname ist ein Pflichtfeld'),

    //
    check('password')
        .isLength({ min: 10 })
        .withMessage('Das Passwort muss mindestens 10 Zeichen lang sein')
]