const express = require('express');
const router = express.Router();
const logger = require('../logger');
const connect = require('../models/db'); // Imported but not called

// Get all gifts
 try {
        const db = await connectToDatabase();

        const collection = db.collection("gifts");
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) {
        logger.console.error('oops something went wrong', e);
        next(e);
    }

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
