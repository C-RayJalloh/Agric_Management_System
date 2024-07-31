const OffTaker = require('../Models/OffTakerRegistry');

const registerOffTaker = (req, res) => {
    try{
        const offTaker = new OffTaker({
            offTakerName: 'John Doe',
            contactInfo: {
                phone: '123-456-7890',
                email: 'johndoe@johndoe.com',
            },
            address: '123 Main Street',
            valueChains: 'Farming, Processing, Marketing',
            products: ['Potatoes', 'Carrots', 'Onions'],
            agentAccounts: [
                {name: 'Jane Doe', contact: {phone: 1234567890, email: 'janedoe@janedoe.com'}},
                {name: 'Mike Johnson', contact: {phone: 9876543210, email: 'mikejohnson@mikejohnson.com'}},
            ],
        });

        offTaker.save();
        res.status(200).json('Offtaker has been registered successfully')

    } catch(err) {
        res.status(500).send('Failed to register an off taker', err);
    };
};

module.exports = {
    registerOffTaker
}