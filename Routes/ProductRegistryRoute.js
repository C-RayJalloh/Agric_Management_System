// routes/cropRoutes.js
const express = require('express');
const router = express.Router();
const cropController = require('../Controllers/ProductRegistryController');

// Add new crop
router.post('/addCrop', cropController.addCrop);

// Other routes can go here...

module.exports = router;
