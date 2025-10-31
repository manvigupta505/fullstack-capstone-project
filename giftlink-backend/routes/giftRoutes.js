const express = require('express');
const router = express.Router();
const logger = require('../logger');
const connectToDatabase = require('../models/db'); // Imported but not called

// Get all gifts


// Get a single gift by ID



// Add a new gift
router.post('/', async (req, res, next) => {
    try {
       
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
