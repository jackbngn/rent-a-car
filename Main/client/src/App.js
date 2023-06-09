import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservations';
import Collection from './pages/Collection/Collection';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Login from './pages/Login'
import './App.css';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/FooterSection/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

/* export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of 'currentPage' is and depending on the value, 
  // will return the corrresponding component to render
const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />
  }
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Collection') {
    return <Collection />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Login') {
    return <Login />
  }
  if (currentPage === 'Reservations') {
    return <Reservations />
  } 
  if (currentPage === 'SignUp') {
    return <SignUp />
  }
};

const handlePageChange = (page) => setCurrentPage(page); */

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/collections" element={<Collection />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
