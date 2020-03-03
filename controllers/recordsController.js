// Pseudo-DB-Bibliothek importieren
var { DataStore } = require('notarealdb')
// Pseudo-DB erstellen
var store = new DataStore('./data')
// Collection für Shop-Artikel
var records = store.collection('records')



// Funktion um Liste der Artikel zurückzugeben
exports.getRecords = (req, res, next) => {
    res.status(200).send(records.list());
    console.log("ein Anfrage wird geschikt")
}

// Funktion um neuen Aretikel hinzuzufügen
exports.addRecord = (req, res, next) => {
    const record = req.body;
    records.create(record)
    res.status(200).send(record);
    console.log("ein Anfrage wird hinzufügt")
}

// Funktion um
exports.putRecord = (req, res, next) => {
    const recordId = req.params.recordId;
    const opj = req.body
    opj.id = recordId
    records.update(opj)
    console.log("ein Anfrage wird Aktulisert")
    res.send("wurde Aktulisert")
}

// Funktion um
exports.deleteRecord= (req, res, next) => {
    const recordId = req.params.recordId;
    records.delete(recordId)
    console.log("ein Anfrage wird gelöscht")
   res.send("wurde gelöscht")
}