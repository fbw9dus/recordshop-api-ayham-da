const express = require('express');
const router = express.Router();
const { getRecords, addRecord,putRecord,deleteRecord } = require('../controllers/recordsController');


/**
 * GET all records
 */
router.get('/', getRecords);

/**
* POST a record
 */
router.post('/', addRecord);

/**
* POST a record
 */
router.put('/:recordId', putRecord);
/**
* POST a record
 */
router.delete('/:recordId', deleteRecord);

module.exports = router;
