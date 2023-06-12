const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
	carType: {
		type: String,
		required: true,
	},
	dropOffDate: {
		type: String,
		required: true,
	},
	returnDate: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
