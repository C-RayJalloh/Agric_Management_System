const router = require('express').Router();
const dealerController = require('../Controllers/DealerRegistryController');

// register dealer route
router.post('/registerDealer', dealerController.registerDealer);

module.exports = router;