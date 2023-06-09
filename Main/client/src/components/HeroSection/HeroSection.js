import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function HeroSection({ onBookClick }) {
	return (
		<div className="heroSection">
			<div className="heroContent">
				<div className="heroSectionText">
					<h2 className="text-7xl font-bold">Rent A Car Hassle-Free</h2>
					<p className="text-4xl">
						Convenience on Wheels We <span>Deliver</span>, You Drive!
					</p>
					<div className="actionButton flex justify-center items-center mt-4">
						<button
							className="bookButton rounded p-2 mr-4"
							onClick={onBookClick}>
							Book A Ride!
						</button>
						<Link to="/about">
							<button className="learnButton rounded p-2">Learn more</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
