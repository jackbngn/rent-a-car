import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import BookingForm from '../components/BookingForm/BookingForm';
import Testimonial from '../components/Testimonial/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

export default function Home() {
	return (
		<div className="homePage">
			<HeroSection />
			<BookingForm />
			<WhyChooseUs />
			<Testimonial />
		</div>
	);
}
