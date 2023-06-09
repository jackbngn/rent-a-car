const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const vehicleSchema = require('./Vehicle');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, 'Please enter a valid email address.'],
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		savedVehicles: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Vehicle',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
