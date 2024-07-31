const Dealer = require('../Models/DealerRegistry');

const registerDealer = (req, res) => {
    try{
        const dealer = new Dealer({
            companyName: 'Mickey Farmers',
            contactInfo: 'mick.farming@mickeyfarmers.com',
            address: '110 Lomlouis Street',
            products: ['Potatoes', 'Carrots', 'Onions'],
            services: ['Harvest', 'Processing', 'Marketing'],
            agents: [
                {name: 'Jane Doe', phone: 1234567890, address: '456 Elm Street'},
                {name: 'Mark Smith', phone: 9999999999, address: '345 Pine Street'},
                {name: 'Jill Johnson', phone: 7777777777, address: '678 Birch Street'}
            ],
            employees: [
                {name: 'Tom Smith', position: 'Manager', phone: 9876543210, address: '789 Oak Street'},
                {name: 'Alice Johnson', position: 'Sales', phone: 5555555555, address: '101 Maple Street'},
                {name: 'Bob Brown', position: 'Marketing', phone: 8888888888, address: '202 Willow Street'}
            ],
            
        });

        dealer.save();
        res.status(200).send('Dealer has been successfully registered');

    } catch(err){
        res.status(500).send('Failed to register a dealer', err);
    }
};


module.exports = {
    registerDealer
}