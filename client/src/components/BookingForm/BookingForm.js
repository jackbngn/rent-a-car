import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import carData from '../../utils/car.data';
import { loadStripe } from '@stripe/stripe-js';

import './BookForm.css';
// import Modal from '../Modal/Modal';

export default function BookingForm() {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedData, setSelectedData] = useState({
		carType: '',
		dropOffDate: '',
		returnDate: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSelectedData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// const handleOpenModal = () => {
	// 	document.body.classList.add('noScroll');
	// 	setIsModalOpen(true);
	// };

	// const handleCloseModal = () => {
	// 	document.body.classList.remove('noScroll');
	// 	setIsModalOpen(false);
	// };

	const redirectToCheckout = async () => {
		console.log('clicked');

		const selectedCar = carData.find(
			(car) => car.priceId === selectedData.carType,
		);
		console.log(selectedCar.priceId);

		if (selectedCar) {
			const dropOff = new Date(selectedData.dropOffDate);
			const returnDate = new Date(selectedData.returnDate);
			const numberOfDays = Math.ceil(
				(returnDate - dropOff) / (1000 * 60 * 60 * 24),
			);

			const updatedPrice = selectedCar.price * numberOfDays;
			console.log('Selected Car:', selectedCar);
			console.log('Number of Days:', numberOfDays);
			console.log('Updated Price:', updatedPrice);

			const response = await fetch('/create-checkout-session', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					carType: selectedCar.priceId,
					quantity: numberOfDays,
				}),
			});

			const { sessionId, publicKey, error } = await response.json();

			if (error) {
				console.error('Error:', error);
				return;
			}

			const stripe = await loadStripe(publicKey);

			const { error: redirectError } = await stripe.redirectToCheckout({
				sessionId: sessionId,
			});

			if (redirectError) {
				console.error('Redirect Error:', redirectError);
			}
		}
	};

	return (
		<div className="bookForm">
			<div className="formBox">
				<h2 className="text-2xl font-semibold mb-6">Book A Car</h2>
				<form className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
					<div className="formField mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<FaCar className="mr-2 text-blue-300" />
							<p className="text-blue-300">Select your car type *</p>
						</label>
						<select
							className="carType border p-2 w-full md:w-64 lg:w-64"
							name="carType"
							value={selectedData.carType}
							onChange={handleInputChange}
							required>
							<option value="" disabled>
								Select your car type
							</option>
							{carData
								.map((car) => ({
									...car,
									fullName: `${car.make} ${car.model}`,
								}))
								.sort((a, b) => a.fullName.localeCompare(b.fullName))
								.map((car) => (
									<option key={car.license} value={car.priceId}>
										{car.make} {car.model}
									</option>
								))}
						</select>
					</div>

					<div className="mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<MdPlace className="mr-2 text-blue-300" />
							<p className="text-blue-300">Drop-off Date *</p>
						</label>
						<input
							type="date"
							className="border p-2 w-full md:w-64 lg:w-64"
							name="dropOffDate"
							value={selectedData.dropOffDate}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0 ">
						<label className="flex items-center mb-2">
							<MdPlace className="mr-2 text-blue-300" />
							<p className="text-blue-300">Return Date *</p>
						</label>
						<input
							type="date"
							className="border p-2 w-full md:w-64 lg:w-64"
							name="returnDate"
							value={selectedData.returnDate}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mt-2 md:mt-8 lg:mt-8 mr-10 sm:mr-0 md:mr-10">
						<button
							className="searchButton border p-2 w-full sm:w-44 md:w-64 lg:w-64 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold text-xl"
							onClick={redirectToCheckout}
							type="button">
							Book
						</button>
					</div>
				</form>
			</div>

			{/* <Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				selectedData={selectedData}
				carData={carData}
			/> */}
		</div>
	);
}
