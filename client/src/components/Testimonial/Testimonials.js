import React from 'react';
import './Testimonial.css';

// Testimonial data
const testimonialData = [
	{
		quote:
			'"I had an amazing experience with this car rental service! Their delivery option made it incredibly convenient for me. The car was delivered right to my doorstep, saving me time and hassle. The vehicle was clean, comfortable, and in great condition. I highly recommend their services!"',
		author: 'Sarah',
	},
	{
		quote:
			'"The car rental process was seamless from start to finish. The delivery service was a game-changer for me. The staff was friendly, and the vehicle exceeded my expectations. I will definitely be using their services again in the future!"',
		author: 'John',
	},
];

export default function Testimonial() {
	return (
		<div className="testimonial">
			<h1> Client's Testimonials</h1>
			<div className="testimonialContent">
				{testimonialData.map((testimonial, index) => (
					<div key={index} className="testimonialBox">
						<p className="quote">{testimonial.quote}</p>
						<p className="author">- {testimonial.author}</p>
					</div>
				))}
			</div>
		</div>
	);
}
