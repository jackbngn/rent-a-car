import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './logo2.png';
import Auth from '../../utils/auth';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(true);
	const [username, setUsername] = useState('');

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const handleSignIn = (username) => {
		setIsSignedIn(true);
		setUsername('username');
	};

	const handleLogout = () => {
		setIsSignedIn(false);
		setUsername('');
	};

	return (
		<nav>
			<div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
				<ul className="mobile-menu__links">
					<li>
						<Link to="/" onClick={closeMenu}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={closeMenu}>
							About
						</Link>
					</li>
					<li>
						<Link to="/reservation" onClick={closeMenu}>
							Reservations
						</Link>
					</li>
					<li>
						<Link to="/collections" onClick={closeMenu}>
							Collection
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={closeMenu}>
							Contact
						</Link>
					</li>
					{Auth.loggedIn() ? (
						<li
							onClick={() => {
								Auth.logout();
								closeMenu();
							}}>
							{' '}
							Logout
						</li>
					) : (
						<>
							<li>
								<Link to="/login" onClick={closeMenu}>
									Sign Up
								</Link>
							</li>
							<li>
								<Link to="/login" onClick={closeMenu}>
									Login
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>

			<div className="logo-container">
				<Link to="/">
					<img className="logo" src={Logo} alt="logo" />
				</Link>
			</div>

			<div className="navLink">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/reservation">Reservations</Link>
					</li>
					<li>
						<Link to="/collections">Collection</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>

			{Auth.loggedIn() ? (
				<div className="userSection">
					<div className="username">{username}</div>
					<button className="logout" onClick={Auth.logout}>
						Logout
					</button>
				</div>
			) : (
				<div className="loginSignUp">
					<button className="signUp">
						<Link to="/login">Sign Up</Link>
					</button>
					<button className="login">
						<Link to="/login">Login</Link>
					</button>
				</div>
			)}

			<div
				className={`burger_menu ${isOpen ? 'open' : ''}`}
				onClick={toggleMenu}>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
			</div>
		</nav>
	);
}
