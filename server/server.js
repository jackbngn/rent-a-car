const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config({ path: '../.env' });

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//
// Stripe api to create checkout session
app.post('/create-checkout-session', async (req, res) => {
	const { carType, quantity } = req.body;

	try {
		const session = await Stripe.checkout.sessions.create(
			{
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
				success_url: 'http://localhost:3000/chekcout/success',
				cancel_url: 'http://localhost:3000/',
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			},
		);

		res.json({
			sessionId: session.id,
			publicKey: process.env.STRIPE_PUBLIC_KEY,
		});
	} catch (error) {
		console.error('Error creating Checkout Session:', error);
		res.status(500).json({ error: 'Failed to create Checkout Session' });
	}
});
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
	await server.start();
	server.applyMiddleware({ app });

	db.once('open', () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`,
			);
		});
	});
};

// Call the async function to start the server
startApolloServer();
