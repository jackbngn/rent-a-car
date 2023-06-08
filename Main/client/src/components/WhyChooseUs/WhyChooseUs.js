import React from 'react';
import './WhyChooseUs.css';
import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';

export default function WhyChooseUs() {
	return (
		<section className="whyChooseUs">
			<div className="whyChooseUsContainer">
				<div className="whyChooseUsItem">
					<div className="whyChooseUsImage">
						<img src={Image1} alt="Image 1" />
					</div>
					<div className="whyChooseUsText">
						<p>
							We also offer the convenience of drop-off delivery. Choose your
							desired location, and our team will deliver the rental vehicle
							directly to you, saving you time and effort.
						</p>
					</div>
				</div>
				<div className="whyChooseUsItem">
					<div className="whyChooseUsText">
						<p>
							Choose from our extensive fleet of vehicles, ranging from compact
							cars to spacious SUVs. We have a vehicle for every need and
							budget, ensuring you find the perfect option for your trip.
						</p>
					</div>
					<div className="whyChooseUsImage">
						<img src={Image3} alt="Image 2" />
					</div>
				</div>
				<div className="whyChooseUsItem">
					<div className="whyChooseUsImage">
						<img src={Image2} alt="Image 3" />
					</div>
					<div className="whyChooseUsText">
						<p>
							Our dedicated team is committed to providing you with exceptional
							customer service. From booking your rental to answering any
							questions you may have during your journey, we are here to ensure
							your experience is smooth and enjoyable.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
