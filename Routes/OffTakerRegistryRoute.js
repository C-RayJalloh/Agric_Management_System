const router = require('exprees').Router();
const offtakerController = require('../Controllers/OffTakerRegistryController');

router.post('/registerOfftaker', offtakerController.registerOffTaker);

module.exports = router;