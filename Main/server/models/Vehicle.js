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
        Type: Number,
        required: true,
    },
    license: {
        Type: String,
        required: false,
        unique: true,
    },
    color: {
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