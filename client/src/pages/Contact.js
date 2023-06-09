import React from 'react';

export default function Contact() {
	return (
		<div className="container mt-5">
			<h1 className='font-bold text-lg'>Contact Us!</h1>
			<form className="row g-3" action="https://formsubmit.co/fbf9cfb9492c7ccafb74d9fef69d8f96" method="POST">

				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="https://jackbngn.github.io/rent-a-car/success" />

				<div className="col-6">
					<label for="firstName" className="form-label">First Name</label>
					<input type="text" className="form-control" name="name" id="firstName" required />
				</div>
				<div className="col-6">
					<label for="lastName" className="form-label">Last Name</label>
					<input type="text" className="form-control" name="Last&nbsp;Name" id="lastName" required />
				</div>
				<div className="col-8">
					<label for="emailInfo" className="form-label">E-mail</label>
					<input type="email" className="form-control" name="email" id="emailInfo" required />
				</div>
				<div className="col-4">
					<label for="phoneNumber" className="form-label">Phone Number</label>
					<input type="text" className="form-control" name="phone" id="phoneNumber" placeholder="+1 (415) 867-5309" />
				</div>
				<div className="col-12">
					<label for="comments" className="form-label">Comments, questions?</label>
					<textarea className="form-control" id="comments" name="comments,&nbsp;questions" rows="3" required></textarea>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary bg-blue-500 text-white rounded p-2">Submit</button>
				</div>
			</form>
		</div>
	);
}
