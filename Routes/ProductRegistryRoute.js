// routes/cropRoutes.js
const express = require('express');
const router = express.Router();
const ProductRegistryController = require('../Controllers/ProductRegistryController');


router.post('/registerProduct', ProductRegistryController.registerProduct);

// Other routes can go here...

module.exports = router;
