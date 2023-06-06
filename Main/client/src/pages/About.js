import React from 'react';

export default function About() {
	return (
		<div classNameName="aboutUs">
			<h1 className='team'>Meet the Team</h1>
			<div className="row cards">
				<div className="column">
					<div className="card">
						<img src="./images/jack.jpg" alt="Jack" width="100%" />
						<div className="container">
							<h2>Jack Nguyen</h2>
							<p className="title">Team Member</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>example@example.com</p>
							<p><button className="button">Contact</button></p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<img src="./images/maggie.jpg" alt="Maggie" width="100%" />
						<div className="container">
							<h2>Maegan Batorek</h2>
							<p className="title">Team Member</p>
							<p>Programmer disguised as a Starbucks Barista</p>
							<p>maegan.batorek@valpo.edu</p>
							<p><button className="button">Contact</button></p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<img src="./images/nathaniel.jpg" alt="Nathaniel" width="100%" />
						<div className="container">
							<h2>Nathaniel Vanderpoort</h2>
							<p className="title">Team Member</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>example@example.com</p>
							<p><button className="button">Contact</button></p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<img src="./images/antonio.jpg" alt="Antonio" width="100%" />
						<div className="container">
							<h2>Antonio Robledo-Ysasaga</h2>
							<p className="title">Team Member</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>example@example.com</p>
							<p><button className="button">Contact</button></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
