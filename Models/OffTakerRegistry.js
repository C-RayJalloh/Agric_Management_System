const mongoose = require('mongoose');

const OffTakerSchema = new mongoose.Schema({
 
    offTakerName: { type: String, required: true },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    address: { type: String, required: true },
 
  valueChains: {
    type: String, // Text Area, use a String type for listing value chains
    required: true,
  },
  products: {
    type: [String], // Multi-select or Text Area; storing as an array of strings
    required: true,
  },
  agentAccounts: [
    {
      name: { type: String, required: true },
      contact: {
        phone: { type: String },
        email: { type: String },
      },
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('OffTakerRegistry', OffTakerSchema);


