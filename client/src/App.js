import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Login from './pages/Login';
import Success from './pages/Success';
import Footer from './components/FooterSection/Footer';
import SuccessPage from './pages/SuccessCheckout/SuccessCheckout';

const httpLink = createHttpLink({
	uri: '/graphql',
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
						<Route path="/checkout/" element={<SuccessPage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
