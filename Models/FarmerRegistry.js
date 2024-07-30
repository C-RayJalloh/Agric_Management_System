const mongoose = require('mongoose');
const schema = mongoose.schema;
const { v4: uuidv4 } = require('uuid');

// FARMER SCHEMA 
const farmerregistrySchema = {
    name: { type: String, required: true},
    nin: { type: String, required: true},
    contactInfo: { type: String, required: true},
    address: { type: String, required: true},
    agrovateUid: {
        type: String,
        default: uuidv4 // Generate a UUID by default
    },
    category: {
        type: String,
        enum: [
            'Smallholder',
            'Commercial',
            'Subsistence',
            'Organic',
            'Specialty Crop',
            'Livestock',
            'Agroforestry',
            'Aquaculture',
            'Urban'
        ],
        default: 'Organic',
        required: true
    },
    farmAssigment: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },

};

module.exports = mongoose.model('FarmerRegistry', farmerregistrySchema);