// create SCHEMA AND MODEL USING MONGOOSE
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create SCHEMA
const cropSchema = new Schema({
    cropName: String,
    variety: String,
    yield: Number,
    area: Number,
    price: Number,
    date: { type: Date, default: Date.now }
});

// build the CROP MODEL & EXPORT IT
module.exports = mongoose.model('Crop', cropSchema);
