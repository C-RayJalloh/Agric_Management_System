const mongoose = require('mongoose');
const schema = mongoose.schema;
const { v4: uuidv4 } = require('uuid');

// DEALER SCHEMA
const dealerSchema = {
    companyName: { type: String, required: true},
    contactInfo: { type: String, required: true},
    address: { type: String, required: true},
   // Products (Multiselect or List)
   products: [
    {
        type: String,
        required: false
    }
    ],
        // Services (Multiselect or List)
    services: [
    {
        type: String,
        required: false
    }
    ],
         // Agents (Multiselect or List)
    agents: [
    {
        name: String,
        phone: Number,
        address: String
    }
    ],
    
    // Employees (List of Employee Profiles)
    employees: [
    {
        name: String,
        position: String,
        phone: Number,
        address: String
    }
    ],

 // Agrovate UID (Generated unique identifier)
 agrovateUid: {
    type: String,
    default: uuidv4, // Generate a UUID by default
    unique: true // Ensure the UID is unique
     },



};

module.exports = mongoose.model('DealerRegistry', dealerSchema);