import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About';
import Reservation from './pages/Reservations';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import './App.css';

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
				</Routes>
			</div>
		</Router>
	);
}

export default App;
