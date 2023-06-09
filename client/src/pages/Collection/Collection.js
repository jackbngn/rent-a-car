import React from 'react';
import './Collection.css';

export default function Collection() {

	return (

	<div>
		<div className='text-5xl font-bold flex justify-center p-4 '>
			The Ultimate Collection
		</div>
		<hr className='h-px my-2 mr-96 ml-80 bg-gray-300 border-0 dark:bg-gray-700'></hr>
		<div className="container grid lg:grid-cols-3 gap-4">

			<div className=' bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='ml-4 mt-3'>
					<img className='pb-2' src='https://res.cloudinary.com/driveau/vehicles/showrooms/models/nissan-gt-r.jpg'></img>
					<div className='font-bold text-xl pb-2'>
						Nissan GT-R NISMO
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>4</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Manual</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>19 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mb-4 font-bold'>
						<div className='mt-3 ml-2 text-lg'>$76.80 USD Per Day</div>
						<div className='button-container pt-1'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='ml-4 pt-5'>
					<img className='object-fill h-64' src='https://www.fmdt.info/img/honda-models/2017-honda-accord-lx-32-white.png' alt='person'></img>
					<div className='font-bold text-xl pt-4 pb-2'>
						Honda Accord
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>5</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>31.5 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mt-3 font-bold'>
						<div className='mt-2 ml-2 text-lg'>$38.19 USD Per Day</div>
						<div className='button-container'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='vehicleBadge'>Electric Vehicle</div>
				<div className='ml-10 mt-16'>
					<img className='ml-6 w-auto h-48' src='https://www.pngall.com/wp-content/uploads/11/Red-Tesla-Model-S.png'></img>
					<div className='font-bold pt-10 text-xl'>
						Tesla Model S
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>4</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_battery.png'></img>
						<div className='mr-8 font-bold'>405 mile range</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mt-3 font-bold'>
						<div className='mt-2 ml-2 text-lg'>$65.35 USD Per Day</div>
						<div className='button-container'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='ml-4'>
					<img className='w-96 h-72 ml-12 mt-6' src='https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/e0dd7d55-88a8-4f2e-a8af-5a87b75938fb/a8f55f30-3dd4-4712-8662-026a527ec97d.png'></img>
					<div className='font-bold text-xl'>
						Porsche Cayman
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures mt-4'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>2</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Manual</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>24 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mt-4 mb-4 font-bold'>
						<div className='mt-1 ml-2 text-lg'>$102.90 USD Per Day</div>
						<div className='button-container'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='ml-4'>
					<img className='w-96 h-72 ml-12 mt-2' src='https://media.chromedata.com/MediaGallery/media/MzE2NzQwXk1lZGlhIEdhbGxlcnk/Hl4pVbupCUJCCMNGgooqvzrTgg-qmStA8M5socufRDNdmAtg2R2xWjqweAgYIgX__UooCdcfEWmSFZBfVk7gJFdMrPqfg2cUHMXjG2qQu_aUJlgCNnHZb3yworEeHQVhcFl7x3MC5Vx6hWjN6F9ddElCbxoFEWMh_ZiiaCVp7NveWq0zii8Jww/2017TOV110003_1280_01.png'></img>
					<div className='font-bold text-xl pt-4'>
						Toyota Sienna
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>8</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>36 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost font-bold'>
						<div className='mt-5 ml-2 text-lg'>$59.76 USD Per Day</div>
						<div className='button-container mt-3'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2'>
				<div className='ml-4'>
					<img className='w-auto h-80' src='https://www.pngall.com/wp-content/uploads/12/Yellow-Camaro-PNG-Photos.png'></img>
					<div className='font-bold text-xl'>
						Chevrolet Camaro
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>4</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>23.5 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mb-4 font-bold'>
						<div className='mt-4 ml-2 text-lg'>$63.26 USD Per Day</div>
						<div className='button-container mt-2'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2 mb-4'>
			<div className='vehicleBadge'>Electric Vehicle</div>
				<div className='ml-4'>
					<img src='https://s7d1.scene7.com/is/image/hyundai/2022-ioniq-5-ltd-rwd-cyber-gray-herox:Browse?fmt=webp-alpha'></img>
					<div className='font-bold text-xl'>
						Hyundai Ioniq 5
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>5</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_battery.png'></img>
						<div className='mr-8 font-bold'>303 mile range</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mb-4 font-bold'>
						<div className='mt-2 ml-2 text-lg'>$63.60 USD Per Day</div>
						<div className='button-container'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white border-2 border-slate-300 rounded shadow-md ml-2 mb-4'>
				<div className='ml-4'>
					<img src='https://www.pngmart.com/files/22/Mazda-3-PNG-Photos.png'></img>
					<div className='font-bold text-xl'>
						Mazda 3
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='vehicleFeatures'>
						<img className='passengers' src='https://images.hertz.com/content/dam/irac/Overlay/icons/person.png'></img>
						<div className='mr-8 font-bold'>5</div>
						<img className='transmission' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_transmission.png'></img>
						<div className='mr-8 font-bold'>Auto</div>
						<img className='fuel-meter' src='https://images.hertz.com/content/dam/irac/Overlay/icons/feature_fuel.png'></img>
						<div className='mr-8 font-bold'>32 mpg</div>
					</div>
					<hr className='h-px my-2 mr-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='cost mb-4 font-bold'>
						<div className='mt-2 ml-2 text-lg'>$42.10 USD Per Day</div>
						<div className='button-container'>
							<button className='bg-yellow-300 hover:bg-yellow-400 border-none font-bold text-black py-2 px-10 rounded'>
									Select
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}
