const MachineOperator = require('../Models/MachineOperatorRegistry');

const registerOperator = (req, res) => {
    try{
        const operator = new MachineOperator({
            operatorName: 'Jahrulo Ray',
            contactInfo: 'johndoe@johndoe.com',
            address: '123 Water Street',
            services: 'Land Preparation, Havesting, Water Supply',
            category: 'Land Preparation',
            fleet: '100 machines',
            employees: [
                {name: 'Jane Doe', position: 'Manager', phone: 1234567890},
                {name: 'Alice Smith', position: 'Operator', phone: 9876543210},
            ],
            // createdOn: new Date()
        });

        operator.save();
        res.status(200).send('Machine operator has been successfully registered');
        // res.send(operator);

    } catch(err){
        res.status(500).send('Failed to register a machine operator', err);
    };

};

module.exports = {
    registerOperator
};