// SERVER SET-UP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const {  ProductRegistryRoute,
    farmerRegistryRoute,
    dealerRegistryRoute,
    MachineOperatorRegistryRoute,
    SeviceProviderRegistryRoute, } = require('./index')

// database connection
mongoose.connect('mongodb://localhost:27017/agricMS');
// check connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// API ROUTES
app.use('/productRegistry', ProductRegistryRoute);
app.use('/farmerRegistry', farmerRegistryRoute);
app.use('/dealerRegistry', dealerRegistryRoute);
app.use('/machineOperatorRegistry', MachineOperatorRegistryRoute);
app.use('/serviceProviderRegistry', SeviceProviderRegistryRoute);




// TEST ROUTE
app.get('/', (req, res) => {
    res.send('Hello everything works')
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
