import React, { useState } from 'react';

export default function Modal({
	isOpen,
	onClose,
	selectedData,
	handleSubmitReservation,
	carData,
}) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [dropOffTime, setDropOffTime] = useState('');
	const [returnTime, setReturnTime] = useState('');

	if (!isOpen) {
		return null;
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// Perform form validation and handle form submission
		// ...
		if (
			!firstName ||
			!lastName ||
			!email ||
			!phoneNumber ||
			!age ||
			!address ||
			!city ||
			!zipCode ||
			!returnTime ||
			!dropOffTime
		) {
			// Handle the case when any required field is missing
			console.log('Please fill out all required fields.');
			return;
		}

		// Pass the reservation details and personal information to the parent component
		handleSubmitReservation({
			...selectedData,
			firstName,
			lastName,
			email,
			phoneNumber,
			age,
			address,
			city,
			zipCode,
			returnTime,
			dropOffTime,
		});

		// Reset form fields
		setFirstName('');
		setLastName('');
		setEmail('');
		setPhoneNumber('');
		setAge('');
		setAddress('');
		setCity('');
		setZipCode('');
		setReturnTime('');
		setDropOffTime('');

		// Close the modal
		onClose();
	};

	const selectedCar = carData.find(
		(car) => `${car.make} ${car.model}` === selectedData.carType.trim(),
	);

	return (
		<div>
			<div
				className={`modalOverlay fixed inset-0 bg-black opacity-50 ${
					isOpen ? '' : 'hidden'
				}`}
				onClick={onClose}></div>
			<div
				className={`modalContent bg-white rounded-lg p-10  ${
					isOpen
						? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
						: 'hidden'
				}`}>
				<div className="flex justify-between items-center mb-2 ">
					<h3 className="text-2xl font-semibold">Booking Summary</h3>
				</div>
				<div className="border-b border-solid border-gray-300 mb-4"></div>
				<div className="modalScrollContent overflow-y-auto lg:h-full md:h-full xsm:h-96">
					{selectedData && (
						<div className="mb-8 ">
							<h4 className="text-lg font-semibold mb-2">
								Car -{' '}
								<span className="text-blue-300">{selectedData.carType}</span>
							</h4>
							<div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
								{selectedCar && (
									<img
										src={selectedCar.image}
										alt="Car"
										className="w-64 h-auto mb-4 sm:mb-0 sm:mr-4"
									/>
								)}
								<div className="flex flex-col mt-4 sm:mt-0 sm:mr-4">
									<p className="text-blue-300">
										Drop-off Date<span className="text-red-700">*</span>
									</p>
									<p className="text-gray-500">
										{selectedData.dropOffDate} / {''}
										<input
											type="time"
											value={dropOffTime}
											onChange={(event) => setDropOffTime(event.target.value)}
											className="border p-1 mt-2"
											required
										/>
									</p>
									<p className="text-blue-300">
										Return Date <span className="text-red-700">*</span>
									</p>
									<p className="text-gray-500">
										{' '}
										{selectedData.returnDate} / {''}
										<input
											type="time"
											value={returnTime}
											onChange={(event) => setReturnTime(event.target.value)}
											className="border p-1 mt-2"
											required
										/>
									</p>
								</div>
							</div>
						</div>
					)}
					<div className="border-b border-solid border-gray-300"></div>
					<form onSubmit={handleFormSubmit}>
						<h3 className="text-xl font-semibold mt-6 text-blue-300">
							Personal Information
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label className="text-gray-500">
									First Name <span className="text-red-700">*</span>
								</label>
								<input
									type="text"
									value={firstName}
									onChange={(event) => setFirstName(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeholder="Enter your first name"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Last Name<span className="text-red-700">*</span>
								</label>
								<input
									type="text"
									value={lastName}
									onChange={(event) => setLastName(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeholder="Enter your last name"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Email<span className="text-red-700">*</span>
								</label>
								<input
									type="email"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeholder="Enter your email address"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Phone Number<span className="text-red-700">*</span>
								</label>
								<input
									type="tel"
									value={phoneNumber}
									onChange={(event) => setPhoneNumber(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeHolder="Enter your phone number"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Age<span className="text-red-700">*</span>
								</label>
								<input
									type="number"
									value={age}
									onChange={(event) => setAge(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeholder="25"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Address<span className="text-red-700">*</span>
								</label>
								<input
									type="text"
									value={address}
									onChange={(event) => setAddress(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeholder="Enter your street address"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									City<span className="text-red-700">*</span>
								</label>
								<input
									type="text"
									value={city}
									onChange={(event) => setCity(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeHolder="Enter your city"
									required
								/>
							</div>
							<div>
								<label className="text-gray-500">
									Zip Code <span className="text-red-700">*</span>
								</label>
								<input
									type="text"
									value={zipCode}
									onChange={(event) => setZipCode(event.target.value)}
									className="border p-2 w-full bg-gray-200 focus:bg-white"
									placeHolder="Enter your zip code"
									required
								/>
							</div>
						</div>
						{/* add send to checkout page */}
						<div className="mt-8">
							<button
								className="submitButton border p-2 bg-blue-300 rounded-lg hover:bg-blue-400 text-white font-semibold"
								type="submit">
								Confirm
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
