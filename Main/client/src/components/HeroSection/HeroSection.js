import React from 'react';
import './Hero.css';

export default function HeroSection() {
	return (
		<div className="heroSection ">
			<div className="heroContent">
				<div className="heroSectionText">
					<h2 className="text-5xl font-semibold">Rent A Car Hassle-Free</h2>
					<h1 className="text-7xl">
						Convenience on Wheels We <span>Deliver</span>, You Drive!
					</h1>
					<div className="actionButton flex justify-center items-center mt-4">
						<button className="bookButton rounded p-2 mr-4">
							Book A Ride!
						</button>
						<button className="learnButton rounded p-2">Learn more </button>
					</div>
				</div>
			</div>
		</div>
	);
}
