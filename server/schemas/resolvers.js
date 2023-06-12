const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Vehicle } = require('../models');
const { Reservation } = require('../models/');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		// CREATE a user
		me: async (parent, args, context) => {
			if (context.user) {
				const user = await User.findOne({ _id: context.user._id }).select(
					'-__v -password',
				);

				return user;
			}
			throw new AuthenticationError('You need to be logged in to access this.');
<<<<<<< HEAD
		},
		getAllUsers: async () => {
			try {
				const users = await User.find();
				return users;
			} catch (error) {
				console.error(error);
				throw new Error('Failed to fetch users from the database');
			}
=======
>>>>>>> 34fb45cd4e12701f44cbbaeffc2649fbb64ac23b
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
		addUser: async (parent, args) => {
				const user = await User.create(args);
				const token = signToken(user);

				return { token, user };
			},
		// LOGIN a user
		login: async (parent, { email, password }) => {

				const user = await User.findOne({ email });

				if (!user) {
					throw new AuthenticationError('Incorrect email or password');
				}

				const correctPassword = await user.isCorrectPassword(password);

				if (!correctPassword) {
					throw new AuthenticationError('Incorrect email or password');
				}

				const token = signToken(user);

				return { token, user };
			},

		// ADD a reservation
		addVehicle: async (parent, { vehicle }, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { savedVehicles: vehicle }  },
					{ new: true },
				);
				return updatedUser;
			}
			throw new AuthenticationError(
				'An error has occurred and your vehicle was not added',
			);
		},

		// DELETE a reservation
		removeVehicle: async (parent, { license }, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: { savedVehicles: {license: license } } },
					{ new: true },
				);
				return updatedUser;
			}
			throw new AuthenticationError(
				'A vehicle matching this license plate was not found',
			);
		},
		createReservation: async (
			_,
			{ carType, dropOffDate, returnDate, userId },
			context,
		) => {
			// if (!context.user) {
			// 	throw new AuthenticationError(
			// 		'You need to be logged in to perform this action',
			// 	);
			// }

			// Create a new Reservation object with the provided data
			const newReservation = new Reservation({
				carType,
				dropOffDate,
				returnDate,
				userId,
			});

			// Save the new reservation in the database
			const savedReservation = await newReservation.save();

			// Find the user by their ID and update their reservations field
			const user = await User.findByIdAndUpdate(
				userId,
				{ $push: { reservations: savedReservation._id } },
				{ new: true },
			);

			return savedReservation;
		},
	},
};

module.exports = resolvers;
