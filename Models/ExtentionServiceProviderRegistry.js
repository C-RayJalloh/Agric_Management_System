const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      'Agricultural Training',
      'Consultancy',
      'Advisory Services',
      // Add other categories as needed
    ],
    required: true,
  },
    organizationName: { type: String, required: true },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    address: { type: String, required: true },
  servicesProvided: {
    type: String, // Text Area, use a String type
    required: true,
  },
  employees: [
    {
      name: { type: String, required: true },
      role: { type: String, required: true },
      contact: {
        phone: { type: String },
        email: { type: String },
      },
    },
  ],
});

module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);


