
const router = require('express').Router();
const farmerRegisteryController = require('../Controllers/FarmerRegistryController');


// register farmer route
router.post('/registerFarmer', farmerRegisteryController.registerFarmer)


// export our router
module.exports = router;