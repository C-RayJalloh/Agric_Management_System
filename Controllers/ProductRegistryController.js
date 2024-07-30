// controllers/cropController.js
const Crop = require('../Models/ProductRegistry');

// Add new crop
const addCrop = (req, res) => {
   

   try {
    const crop = new Crop({
        cropName: 'croppy',
        variety: 'variety',
        yield: 10,
        area: 140,
        price: 100
    });

    // saves the data
    crop.save();
    res.status(201).send('Crop has been saved to the database');
   } catch (err) {
    res.status(500).send('Failed!')
   };
   
};

// Other crop-related methods can go here...

module.exports = {
    addCrop
    // Export other methods as needed
};


