// const { gql } = require("apollo-server-express"); 

// const typeDefs = gql`
//     type User {
//         _id: ID 
//         username: String
//         email: String
//     }
    
//     type Query {
//         me: User 
//         user(username: String!): User
//     }

//     type Mutation {
//         loginUser(email: String!, password: String!): Auth
//         addUser(username: String!, email: String!, password: String!): Auth
//     }

//     type Auth {
//         token: ID!
//         user: User
//     }
//     `;

//     module.exports = typeDefs; 