const ServiceProvider = require('../Models/ExtentionServiceProviderRegistry');

const registerServiceProvider = (req, res) => {
    try{
        const serviceProvider = new ServiceProvider({
            category: 'Agricultural Training',
            organizationName: 'John Doe Training',
            contactInfo: {
                phone: '123-456-7890',
                email: 'johndoe@johndoetraining.com',
            },
            address: '123 Main Street',
            servicesProvided: 'Training on farming techniques, crop selection, and pest management',
            employees: [
                {
                    name: 'Jane Smith',
                    role: 'Trainer',
                    contact: {
                        phone: '987-654-3210',
                        email: 'janesmith@johndoetraining.com',
                    },
                },
            ],
        });

        serviceProvider.save();
        res.status(201).json(serviceProvider);
    } catch (error) {
        res.status(400).json({ message: error})
        console.error(error);
    };

};

module.exports = {
    registerServiceProvider,
};