const mongoose = require('mongoose');
const schema = mongoose.schema;

// Product Registry Schema
const productRegistrySchema = {
    genericName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Farm Input', 'Chicks', 'Piglets', 'Medicines', 'Farm Tools', 'PPEs'], // Define default categories here
        default: 'Chicks' // Set default value if needed
    },
    productType: {
        type: String,
        enum: [
            'Fertiliser',
            'Seeds',
            'Seedlings',
            'Herbicides',
            'Pesticides',
            'Day Old Chicks',
            'Pullets',
            'Piglets',
            'Vitamins',
            'Antibiotics',
            'Vaccines',
            'Manual Sprayers',
            'Semi-Mechanised Sprayers',
            'Manual Seeders',
            'Semi-Mechanised Seeders',
            'Boots',
            'Overalls',
            'Gloves',
            'Face Masks',
            'Goggles'
        ],
        default: 'Fertiliser' // You can set a different default value if needed
    },
    additionInfo: {
        type: String,
        required: true
    },
    createdOn: Date,
};


module.exports = mongoose.model('ProductRegistry', productRegistrySchema);