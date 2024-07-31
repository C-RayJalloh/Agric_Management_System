const router = require('express').Router();
const ServiceProviderController = require('../Controllers/ExtentionServiceProviderRegistryController');

router.post('/registerServiceProvider', ServiceProviderController.registerServiceProvider);

module.exports = router;