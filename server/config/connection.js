const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/rent-a-car',
);

module.exports = mongoose.connection;

// 127.0.0.1:27017