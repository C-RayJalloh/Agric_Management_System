// controllers/cropController.js
const ProductRegistry = require('../Models/ProductRegistry');

//  DATA MANIPULATION
const registerProduct = (req, res) => {
    try{
        const product = new ProductRegistry({
            genericName: req.body.genericName,
            brandName: req.body.brandName,
            category: req.body.category,
            productType: req.body.productType,
            additionInfo: req.body.additionInfo,
            createdOn: new Date()
        });

        product.save();
        res.status(201).send('Product has been registered successfully');
    } catch (err){
        res.status(500).send('Failed to register product')
    }
};


// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await ProductRegistry.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send('Failed to get products');
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await ProductRegistry.findById(req.params.id);
        if (!product) {
            res.status(404).send('Product not found');
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).send('Failed to get product');
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const updateProduct = await ProductRegistry.findByIdAndUpdate(id, req.body);
        if (!updateProduct) {
            res.status(404).send('Product not found');
        };
      
        res.status(200).json(updateProduct)

    } catch (err) {
        res.status(500).send('Failed to update product');
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct = await ProductRegistry.findByIdAndDelete(id);
        if (!deletedProduct) {
            res.status(404).send('Product not found');
        } else {
            res.status(200).send('Product deleted successfully');
        }
    } catch (err) {
        res.status(500).send('Failed to delete product');
    }
};

module.exports = {
    registerProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};


