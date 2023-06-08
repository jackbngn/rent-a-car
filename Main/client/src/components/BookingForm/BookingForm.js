import React from 'react';
import { FaCar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

import './BookForm.css';

export default function BookingForm() {
	return (
		<div className="bookForm  ">
			<div className="formBox ">
				<h2 className="text-2xl font-semibold mb-6">Book A Car</h2>
				<form className="flex flex-col md:flex-row lg:flex-row">
					<div className="formField mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<FaCar className="mr-2 text-blue-300" />
							<p className="text-blue-300">Select your car type *</p>
						</label>
						<select
							className="carType border p-2 w-full md:w-64 lg:w-64"
							defaultValue=""
							required>
							<option value="" disabled>
								Select your car type
							</option>
							<option value="sedan">Sedan</option>
							<option value="suv">SUV</option>
							<option value="electric">Electric</option>
							<option value="luxury">Luxury</option>
						</select>
					</div>

					<div className=" mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<MdPlace className="mr-2 text-blue-300" />
							<p className="text-blue-300">Drop-off Date *</p>
						</label>
						<input
							type="date"
							className="border p-2 w-full md:w-64 lg:w-64"
							required
						/>
					</div>

					<div className=" mr-0 md:mr-10 lg:mr-10 mb-4 md:mb-0 lg:mb-0">
						<label className="flex items-center mb-2">
							<MdPlace className="mr-2 text-blue-300" />
							<p className="text-blue-300">Pick-up Date *</p>
						</label>
						<input
							type="date"
							className="border p- w-full md:w-64 lg:w-64"
							required
						/>
					</div>

					<div className="mt-4 md:mt-8 lg:mt-8">
						<button className="searchButton border p-2 w-full sm:w-44 md:w-64 lg:w-64 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold text-xl">
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
