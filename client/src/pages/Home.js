import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import BookingForm from '../components/BookingForm/BookingForm';
import Testimonial from '../components/Testimonial/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ScrollUpButton from '../components/ScrollUp/ScollUpButton';

export default function Home() {
	const bookingFormRef = useRef(null);

	const handleBookClick = () => {
		if (bookingFormRef.current) {
			bookingFormRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="homePage">
			<HeroSection onBookClick={handleBookClick} />
			<div ref={bookingFormRef}>
				<BookingForm />
			</div>
			<WhyChooseUs />
			<Testimonial />
			<ScrollUpButton />
		</div>
	);
}
