const db = require('../config/connection');
const { Vehicle } = require('../models');
const carData = require('./carData.json');

db.once('open', async () => {
    await Vehicle.create(carData);

    console.log('Seeding completed!');
    process.exit(0);
});