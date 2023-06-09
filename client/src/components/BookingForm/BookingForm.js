import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

import { VEHICLES } from '../../utils/queries';
import './BookForm.css';
import Modal from '../Modal/Modal';
import NissanGtr from '../../images/Car/nissanGTR.png';
import Camaro from '../../images/Car/Camaro.png';
import Honda from '../../images/Car/HondaAccord.png';
import Hyundai from '../../images/Car/Hyundai.png';
import Mazda from '../../images/Car/Mazda.png';
import Porsche from '../../images/Car/Porsche.png';
import Tesla from '../../images/Car/Tesla.png';
import Toyota from '../../images/Car/Toyota.png';

export default function BookingForm() {
	//hard coded car data
	const carData = [
		{
			make: 'Nissan',
			model: 'GT-R NISMO',
			image: NissanGtr,
		},
		{
			make: 'Chevrolet',
			model: 'Camaro',
			image: Camaro,			
		},
		{
			make: 'Honda',
			model: 'Accord',
			image: Honda,
		},
		{
			make: 'Hyundai',
			model: 'Ioniq 5',
			image: Hyundai,
		},
		{
			make: 'Mazda',
			model: '3',
			image: Mazda,
		},
		{
			make: 'Porsche',
			model: 'Cayman',
			image: Porsche,
		},
		{
			make: 'Tesla',
			model: 'Model S',
			image: Tesla,
		},
		{
			make: 'Toyota',
			model: 'Sienna',
			image: Toyota,
		}

	];

	// useState to set open and close for modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedData, setSelectedData] = useState({
		carType: '',
		dropOffDate: '',
		returnDate: '',
	});
	// Save form data
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSelectedData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Handle modal opening by setting the useState isModalOpen to true
	const handleOpenModal = () => {
		//turn off scrolling on main page when modal is open
		document.body.classList.add('noScroll');
		setIsModalOpen(true);
	};

	// Handle modal closing by setting the use state isModalOpen to false
	const handleCloseModal = () => {
		//remove no scoll when modal is closed
		document.body.classList.remove('noScroll');
		setIsModalOpen(false);
	};
	// Find the user's selected car to by the make and moddel to get the image data
	return (
		<div className="bookForm">
			<div className="formBox">
				<h2 className="text-2xl font-semibold mb-6">Book A Car</h2>
				<form className="flex flex-col md:flex-row lg:flex-row">
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
							{carData.map((car) => (
								<option key={car.id} value={`${car.make} ${car.model} `}>
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

					<div className="mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<MdPlace className="mr-2 text-blue-300" />
							<p className="text-blue-300">Return Date *</p>
						</label>
						<input
							type="date"
							className="border p-2 w-full md:w-64 lg:w-64"
							name="returnDate"
							value={selectedData.Date}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mt-4 md:mt-8 lg:mt-8">
						<button
							className="searchButton border p-2 w-full sm:w-44 md:w-64 lg:w-64 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold text-xl"
							onClick={handleOpenModal}
							type="button">
							Search
						</button>
					</div>
				</form>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				selectedData={selectedData}
				carData={carData}
			/>
		</div>
	);
}
