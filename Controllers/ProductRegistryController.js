// controllers/cropController.js
const Crop = require('../Models/ProductRegistry');

// Add new crop
const addCrop = (req, res) => {
    const crop = new Crop({
        cropName: req.body.cropName,
        variety: req.body.variety,
        yield: req.body.yield,
        area: req.body.area,
        price: req.body.price
    });

    crop.save((err) => {
        if (err) {
            console.log('Error saving crop:', err);
            return res.status(500).send('Error saving crop');
        }
        res.status(201).send('Crop has been saved to the database');
    });
};

// Other crop-related methods can go here...

module.exports = {
    addCrop
    // Export other methods as needed
};
