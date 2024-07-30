const farmerRegistry = require('../Models/FarmerRegistry');

const registerFarmer = (req,res) => {
    try{
      const farmer = new farmerRegistry({
        name: 'Bob Mickey',
        nin: 'LPDS02SHA',
        contactInfo: 'bobbytesting@gmail.com',
        address: '124 New York Street',
        // category: 'Commercial',
        farmAssigment: 'Harvesting and processing aquatic products',
        // createdOn: new Date()
      });

      farmer.save();
      res.status(200).send('farmer has been successfully registered');
    } catch(err){
        res.status(500).send('Failed to register a farmer', err)
    };
};



module.exports = {
    registerFarmer
};
