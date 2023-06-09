const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    license: {
        type: String,
        required: false,
        unique: true,
    },
    color: {
        type: String,
        required: true,
    },
    numberOfSeats: {
        type: Number,
        required: true,
    },
    // Manual or Automatic
    transmission: {
        type: String,
        required: true,
    },
    // Petrol or Electric
    engine: {
        type: String,
        required: true,
    },
    // coupe, sedan, minivan, suv, etc.
    vehicleClass: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;