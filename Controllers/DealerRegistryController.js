const Dealer = require('../Models/DealerRegistry');

const registerDealer = (req, res) => {
    try{
        const dealer = new Dealer({
            companyName: 'Browns Farmers',
            contactInfo: 'john.doe@brownsfarmers.com',
            address: '123 Main Street',
            products: ['Potatoes', 'Carrots', 'Onions'],
            services: ['Harvest', 'Processing', 'Marketing'],
            agents: [{name: 'Jane Doe', phone: 1234567890, address: '456 Elm Street'}],
            employees: [{name: 'Tom Smith', position: 'Manager', phone: 9876543210, address: '789 Oak Street'}],
            
        });

        dealer.save();
        res.status(200).send('Dealer has been successfully registered')

    } catch(err){
        res.status(500).send('Failed to register a dealer', err)
    }
};


module.exports = {
    registerDealer
}