const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Vehicle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		// CREATE a user
		me: async (parent, args, context) => {
			if (context.user) {
				const user = await User.findOne({ _id: context.user_id }).select(
					'-__v -password',
				);

				return user;
			}
			// throw new AuthenticationError('You need to be logged in to access this.');
		},
		getAllUsers: async () => {
			try {
				const users = await User.find();
				return users;
			} catch (error) {
				console.error(error);
				throw new Error('Failed to fetch users from the database');
			}
		},
		vehicles: async () => {
			try {
				const vehicles = await Vehicle.find();
				return vehicles;
			} catch (error) {
				console.log(error);
				throw new Error('Failed to fetch vehicles');
			}
		},
	},

	Mutation: {
		// SignUp
		addUser: async (parent, { username, email, password }) => {
			try {
				const user = await User.create({ username, email, password });

				const token = signToken(user);

				return { token, user };
			} catch (err) {
				throw new AuthenticationError('Error creating user');
			}
		},
		// LOGIN a user
		login: async (parent, args) => {
			try {
				const { username, email, password } = args;

				const user = await User.findOne({ $or: [{ username }, { email }] });

				if (!user) {
					throw new AuthenticationError('Incorrect email or password');
				}

				const correctPassword = await user.isCorrectPassword(password);

				if (!correctPassword) {
					throw new AuthenticationError('Incorrect email or password');
				}

				const token = signToken(user);

				return { token, user };
			} catch (err) {
				throw new AuthenticationError(err.message);
			}
		},
		// ADD a reservation
		addVehicle: async (parent, { vehicleInput }, context) => {
			if (context.vehicle) {
				const {
					make,
					model,
					year,
					license,
					color,
					numberofSeats,
					transmission,
					engine,
					vehicleClass,
					image,
				} = vehicleInput;
				const vehicle = await Vehicle.findByIdAndUpdate(
					{ _id: context.vehicle._id },
					{ $push: { savedVehicles: { vehicleInput } } },
					{ new: true },
				);
				return vehicle;
			}
			throw new AuthenticationError(
				'An error has occurred and your vehicle was not added',
			);
		},

		// DELETE a reservation
		removeVehicle: async (parent, { license }, context) => {
			if (context.vehicle) {
				const vehicle = await Vehicle.findByIdAndUpdate(
					{ _id: context.vehicle._id },
					{ $push: { savedVehicles: { license } } },
					{ new: true },
				);
				return vehicle;
			}
			throw new AuthenticationError(
				'A vehicle matching this license plate was not found',
			);
		},
	},
};

module.exports = resolvers;
