import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { setContext } from '@apollo/client/link/context';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';

import 'tailwindcss/tailwind.css';
import './App.css';

import NavBar from './components/NavBar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservations';
import Collection from './pages/Collection/Collection';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Success from './pages/Success';
import Footer from './components/FooterSection/Footer';
import StripeCheckout from './utils/StripeCheckout';
import SuccessPage from './pages/SuccessCheckout/SuccessCheckout';

const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/reservation" element={<Reservation />} />
						<Route path="/collections" element={<Collection />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<Login />} />
						<Route path="/success" element={<Success />} />
						<Route path="/checkout/success" element={<SuccessPage />} />
						<Route path="/checkout/*" element={<CheckoutWithElements />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ApolloProvider>
	);
}

function CheckoutWithElements() {
	return (
		<Elements stripe={stripePromise}>
			<StripeCheckout />
		</Elements>
	);
}

export default App;
