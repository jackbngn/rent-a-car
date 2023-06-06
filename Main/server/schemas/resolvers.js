// const { User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");

// const resolvers = {
//     Query: {
//         me: async (parent, args, context) => {
//             if (context.user) {
//                 const userDate = await User.findOne({})
//                     .select("-__v -password")

//                     return userData;
//             }
//             throw new AuthenticationError("Friend, you are not logged in!");
//         },
//         user: async (parent, { username }) => {
//             return User.findOne({ username })
//                 .select("-__v -password")
//         },
//     },
//     Mutation: {
//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);

//             return { token, user };
//         },
//         loginUser: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 throw new AuthenticationError("Incorrect Credentials");
//             }

//             const correctPw = await user.isCorrectPassword(password);

//             if (!correctPw) {
//                 throw new AuthenticationError("Incorrect Credentials");
//             }

//             const token = signToken(user);
//             return { token, user };
//         },
//     },
// };

// module.exports = resolvers;