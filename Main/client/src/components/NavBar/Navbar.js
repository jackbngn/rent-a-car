import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './logo2.png';

export default function NavBar() {
	return (
		<nav>
			<div>
				<Link to={'/'}>
					<img className="logo" src={Logo} alt="logo"></img>
				</Link>
			</div>

			<div className="navLink">
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/reservation'}>Reservations</Link>
					</li>
					<li>
						<Link to={'/collections'}>Collection</Link>
					</li>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
				</ul>
			</div>

			<div className="loginSignUp">
				<button className="signUp">
					<Link to={'/signUp'}>Sign Up</Link>
				</button>
				<button className="login">
					<Link to={'login'}>Login</Link>
				</button>
			</div>
		</nav>
	);
}
