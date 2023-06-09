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

<<<<<<< HEAD
    type User {
        _id: ID
        username: String
        email: String
        password: String
        reservations: [Vehicle]
    }
=======
	type User {
		_id: ID
		username: String
		email: String
		password: String
	}
>>>>>>> ac080d1911178fdc7669c69baee39fc84871637d

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		getAllUsers: [User!]
		vehicles: [Vehicle]
	}

<<<<<<< HEAD
    input savedVehicleInfo {
        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addVehicle(make: String!, model: String! year: Int!, license: String!, color: String!, numberofSeats: Int!, transmission: String!, engine: String! vehicleClass: String! image: String!): User
        removeVehicle(license: ID!): Vehicle
    }
=======
	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addVehicle(
			make: String!
			model: String!
			year: Int!
			license: String!
			color: String!
			numberofSeats: Int!
			transmission: String!
			engine: String!
			vehicleClass: String!
			image: String!
		): User
		removeVehicle(license: ID!): Vehicle
	}
>>>>>>> ac080d1911178fdc7669c69baee39fc84871637d
`;

module.exports = typeDefs;
