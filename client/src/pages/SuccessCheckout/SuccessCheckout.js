import React from 'react';
import './SuccessPage.css';
import SuccessLogo from './SuccessLogo.png';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
	return (
		<div className="successContainer justify-center items-center flex">
			<div className="success-content">
				<div className="flex justify-center">
					<img className="successImage" src={SuccessLogo} alt="Success Icon" />
				</div>
				<h2 className="successHeading">Your Order Was Successful</h2>
				<p className="successMessage">
					Please check your email for confirmation.
				</p>
				<Link to={'/'}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	);
};

export default SuccessPage;
