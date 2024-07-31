const router = require('express').Router();
const MachineOperatorController = require('../Controllers/MachineOperatorRegistryController');


router.post('/registerMachineOperator', MachineOperatorController.registerOperator);


module.exports = router;