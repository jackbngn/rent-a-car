import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footerContent">
				<ul className="footerList">
					<li className="footerListItem">
						<h3 className="footerTitle">Fleet</h3>
						<p className="footerDescription">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
							massa elit. Vestibulum ut pretium lectus.
						</p>
					</li>
					<li className="footerListItem">
						<h3 className="footerTitle">Working Hours</h3>
						<p className="footerDescription">Monday - Saturday: 9am - 6pm</p>
						<p className="footerDescription">Sunday: Closed</p>
					</li>
					<li className="footerListItem">
						<h3 className="footerTitle">Subscribe to Newsletter</h3>
						<form className="newsletterForm">
							<input
								type="email"
								className="newsletterInput"
								placeholder="Enter your email"
							/>
							<button type="submit" className="newsletterButton">
								Subscribe
							</button>
						</form>
					</li>
				</ul>
			</div>
		</footer>
	);
}
