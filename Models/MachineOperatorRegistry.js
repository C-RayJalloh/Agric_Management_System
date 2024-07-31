const mongoose = require("mongoose");
const schema = mongoose.schema;

// M-O-R SCHEMA
const machineoperatorregistry = {
    operatorName: { type: String, required: true },
    contactInfo: { type: String, required: true },
    address: { type: String, required: true },
    services: { type: String, required: true},
    category: {
        type: String,
        enum: ['Land Preparation', 'Havesting', 'Water Supply'],
        required: true
    },
    fleet: { type: String, required: true},
    employees: [
        {
            name: String,
            position: String,
            phone: Number,
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now
    },
}

module.exports = mongoose.model('MachineOperatorRegistry', machineoperatorregistry);

