const Record = require('../models/Record')
const createError = require('http-errors')

exports.getRecords = async (req, res, next) => {
  // Schreib hier code um alle records aus der records-Collection zu holen
  try {
    const records = await Record.find()
    res.status(200).send(records);
  } catch (error) {
    next(error)
  }
  
};

exports.getRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);
  } catch (e) {
    next(e);
  }
  
};

exports.deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);
  } catch (e) {
    next(e);
  }
};

exports.updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);
  } catch (e) {
    next(e);
  }
};

exports.addRecord = async (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten des neuen record aus req.body in der records-Collection zu speichern
  const record = Record.create(data)
  res.status(200).send(record);
};