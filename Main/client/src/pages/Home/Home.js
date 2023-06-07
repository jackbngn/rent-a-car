import React from 'react';
import Image from './car.png';
import './Home.css';
import { FaCar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

export default function Home() {
	return (
		<div className="homePage">
			<div className="heroSection ">
				<div className="heroContent">
					<div className="heroSectionText">
						<h2 className="text-5xl font-semibold">Plan Your Trip Now</h2>
						<h1 className="text-7xl">
							Convenience on Wheels We <span>Deliver</span>, You Drive!
						</h1>
						<div className="actionButton flex justify-center items-center mt-4">
							<button className="bookButton rounded p-2 mr-4">
								Book A Ride!
							</button>
							<button className="learnButton rounded p-2">Learn more > </button>
						</div>
					</div>

					<img src={Image} alt="car keys" className=" " />
				</div>
			</div>

			<div className="bookForm  shadow-lg">
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
							className="border p-2 w-full md:w-64 lg:w-64"
							required
						/>
					</div>

					<div className="mt-4 md:mt-8 lg:mt-8">
						<button className="searchButton border p-2 w-full sm:w-44 md:w-64 lg:w-64 bg-blue-300 rounded-lg hover:bg-blue-400">
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
