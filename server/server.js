const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const Stripe = require('stripe');
const dotenv = require('dotenv');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const { development } = require('./config/config');

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

// Initialize Stripe with the appropriate secret key based on the environment
const stripeSecretConfig = {
	development: process.env.STRIPE_SECRET_KEY_TEST,
	production: process.env.STRIPE_SECRET_KEY_TEST, // Use testing key in production
};

// Initialize Stripe with the appropriate public key based on the environment
const stripePublicConfig = {
	development: process.env.STRIPE_PUBLIC_KEY_TEST,
	production: process.env.STRIPE_PUBLIC_KEY_TEST, // Use testing key in production
};

const stripe = new Stripe(
	stripeSecretConfig[process.env.NODE_ENV || 'development'],
);

const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

// Route for the root URL
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// URLs for success and cancel pages
const successUrl =
	process.env.NODE_ENV === 'production'
		? 'https://fleet-rental.herokuapp.com/checkout/success'
		: 'http://localhost:3000/checkout/success';

const cancelUrl =
	process.env.NODE_ENV === 'production'
		? 'https://fleet-rental.herokuapp.com/'
		: 'http://localhost:3000/';

// Create checkout session route
app.post('/create-checkout-session', async (req, res) => {
	const { carType, quantity } = req.body;

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price: carType,
					quantity: quantity,
				},
			],
			mode: 'payment',
			shipping_address_collection: {
				allowed_countries: ['US'],
			},
			success_url: successUrl,
			cancel_url: cancelUrl,
		});

		res.json({
			sessionId: session.id,
			publicKey: stripePublicConfig[process.env.NODE_ENV || 'development'],
		});
	} catch (error) {
		console.error('Error creating Checkout Session:', error);
		res.status(500).json({ error: 'Failed to create Checkout Session' });
	}
});

// Start the Apollo Server and the database connection
const startServer = async () => {
	await server.start();
	server.applyMiddleware({ app });

	db.once('open', () => {
		app.listen(process.env.PORT || 3001, () => {
			console.log(`API server running on port ${process.env.PORT || 3001}!`);
			console.log(
				`Use GraphQL at http://localhost:${process.env.PORT || 3001}${
					server.graphqlPath
				}`,
			);
		});
	});
};

startServer();
