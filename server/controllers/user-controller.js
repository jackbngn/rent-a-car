// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // create a user, assign a token, and send it back to client/src/pages/SignUp.js/
    async createUser({ body } , res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'User could not be created'});
        }
        const token = signToken(user);
        res.json({ token, user});
    },
}
