const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Vehicle {
		_id: ID
		make: String
		model: String
		year: Int
		license: String
		color: String
		numberOfSeats: Int
		transmission: String
		engine: String
		class: String
		image: String
	}

	type User {
		_id: ID
		username: String
		email: String
		savedVehicles: [Vehicle]
	}

	type Reservation {
		id: ID!
		carType: String!
		dropOffDate: String!
		returnDate: String!
		userId: ID!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		vehicles: [Vehicle]
	}

	input addVehicleInput {
		make: String
		model: String
		year: Int
		license: String
		color: String
		numberofSeats: Int
		transmission: String
		engine: String
		vehicleClass: String
		image: String
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addVehicle(vehicle: addVehicleInput): User
		removeVehicle(license: String!): User
	}
`;

module.exports = typeDefs;
