// controllers/cropController.js
const ProductRegistry = require('../Models/ProductRegistry');

//  DATA MANIPULATION
const registerProduct = (req, res) => {
    try{
        const product = new ProductRegistry({
            genericName: 'Potatoe',
            brandName: 'Browns',
            category: 'Chicks',
            productType: 'Day Old Chicks',
            additionInfo: 'Our products really are the best in town, Visit our store to see them',
            createdOn: new Date()
        });

        product.save();
        res.status(201).send('Product has been registered successfully');
    } catch (err){
        res.status(500).send('Failed to register product')
    }
}



module.exports = {
    // Exporting the methods
    registerProduct
};


