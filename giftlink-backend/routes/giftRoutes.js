const express = require('express');
const router = express.Router();
const logger = require('../logger');
const connectToDatabase = require('../models/db'); 

// Get all gifts
router.get('/', async (req, res, next) => {
    logger.info('/ called');
    try {
       
    } catch (e) {
        logger.console.error('oops something went wrong', e);
        next(e);
    }
});

// Get a single gift by ID



// Add a new gift


module.exports = router;
