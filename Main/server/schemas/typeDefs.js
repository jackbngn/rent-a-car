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
        password: String
        reservations: [Vehicle]
    }

    type Auth {
        token: ID 
        user: User
    }

    type Query {
        me: User
        vehicles: [Vehicle]
    }

    input savedVehicleInfo {
        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addVehicle(make: String!, model: String! year: Int!, license: String!, color: String!, numberofSeats: Int!, transmission: String!, engine: String! vehicleClass: String! image: String!): User
        removeVehicle(license: ID!): Vehicle
    }
`;

module.exports = typeDefs;
