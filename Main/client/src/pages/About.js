import React from 'react';

export default function About() {
	return (
		<div className="aboutUs">

			<div>
				<h2 className='team'>About Fleet</h2>
				<p className="aboutPage mb-3 text-center decoration-4 text-2xl font-bold">At Fleet, we are dedicated to providing our customers with the
					best experience possible when it comes to trip planning. Your trip should be stress-free which is why we made it our goal
					to do all the work and help you relax. Just pick a date and time and the vehicle of your choice, and we'll bring it to you!
					When everything is done, we'll pick the vehicle back up from you! Check out our collection of vehicles and start your trip today.
				</p>
			</div>

			<h1 className='team'>Meet the Team</h1>

			<div className="row cards">
				<div className="column">
					<div className="card">
						<img src="./images/maggie.jpg" alt="Maggie" width="100%" />
						<div className="container">
							<h2 className='font-bold text-lg'>Maegan Batorek</h2>
							<p className="title">Chicago, IL</p>
							<p>Programmer disguised as a Starbucks Barista</p>
							<a className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="mailto: maegan.batorek@valpo.edu">Send Email</a>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<img src="./images/nathaniel.jpg" alt="Nathaniel" width="100%" />
						<div className="container">
							<h2 className='font-bold text-lg'>Nathaniel Vanderpoort</h2>
							<p className="title">Team Member</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>example@example.com</p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<img src="./images/antonio.jpg" alt="Antonio" width="100%" />
						<div className="container">
							<h2 className='font-bold text-lg'>Antonio Robledo-Ysasaga</h2>
							<p className="title">Team Member</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>example@example.com</p>
						</div>
					</div>
				</div>
			</div>

			<div className="column">
				<div className="card">
					<img src="./images/jack.jpg" alt="Jack" width="100%" />
					<div className="container">
						<h2 className='font-bold text-lg'>Jack Nguyen</h2>
						<p className="title">Team Member</p>
						<p>Some text that describes me lorem ipsum ipsum lorem.</p>
						<p>example@example.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
