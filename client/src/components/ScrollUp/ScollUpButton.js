import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css';

export default function ScrollUpButton() {
	const [isVisible, setIsVisible] = useState(false);

	// Listens for the scroll
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// When the page is past a certain point setIsVisible is true
	const handleScroll = () => {
		if (window.pageYOffset > 500) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll to the top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className={`scrollUpButton ${isVisible ? 'visible' : ''}`}
			onClick={scrollToTop}>
			🔝
		</button>
	);
}
