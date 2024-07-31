// routes/cropRoutes.js
const express = require('express');
const router = express.Router();
const ProductRegistryController = require('../Controllers/ProductRegistryController');


router.post('/registerProduct', ProductRegistryController.registerProduct);
router.get('/getProducts', ProductRegistryController.getProducts);
router.get('/getProduct/:id', ProductRegistryController.getProductById);
router.put('/updateProduct/:id', ProductRegistryController.updateProduct);
router.delete('/deleteProduct/:id', ProductRegistryController.deleteProduct);
// Other routes can go here...

module.exports = router;


/** 
 * 
 * GET for retrieving data (list or specific item)
  POST for creating new data
  PUT/PATCH for updating existing data
  DELETE for removing data
 * 
 */