import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUp = () => {
	const [validated, setValidated] = useState(false);
	const [userFormData, setUserFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [formErrors, setFormErrors] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [addUser, { error }] = useMutation(ADD_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
		setFormErrors({ ...formErrors, [name]: '' }); // Clear the error message when input changes
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		setValidated(true);

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
			return;
		}

		try {
			const { data } = await addUser({
				variables: { ...userFormData },
			});

			Auth.login(data.addUser.token);
		} catch (err) {
			console.error(err);
		}

		setUserFormData({
			username: '',
			email: '',
			password: '',
		});
	};

	const validateForm = () => {
		const errors = {};
		let isValid = true;

		if (userFormData.username.trim() === '') {
			errors.username = 'Username is required';
			isValid = false;
		}

		if (userFormData.email.trim() === '') {
			errors.email = 'Email is required';
			isValid = false;
		}

		if (userFormData.password.trim() === '') {
			errors.password = 'Password is required';
			isValid = false;
		}

		setFormErrors(errors);
		return isValid;
	};

	return (
		<section className="">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-4 space-y-2 md:space-y-6 sm:p-8">
						<h1 className="text-xl leading-tight tracking-tight text-slate-400 md:text-2xl">
							Sign Up
						</h1>
						<form
							className={`space-y-4 md:space-y-6 ${
								validated ? 'was-validated' : ''
							}`}
							noValidate
							onSubmit={handleFormSubmit}>
							<div>
								<label
									htmlFor="username"
									className="block mb-3 text-sm font-medium text-slate-950">
									Username
								</label>
								{formErrors.username && (
									<div className="text-red-500 text-sm mb-3">
										{formErrors.username}
									</div>
								)}
								<input
									type="text"
									name="username"
									id="username"
									onChange={handleInputChange}
									value={userFormData.username}
									required
									className={`bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 ${
										formErrors.username && 'border-red-500'
									}`}
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-3 text-sm font-medium text-slate-950">
									Email
								</label>
								{formErrors.email && (
									<div className="text-red-500 text-sm mb-3">
										{formErrors.email}
									</div>
								)}
								<input
									type="email"
									name="email"
									id="email"
									onChange={handleInputChange}
									value={userFormData.email}
									required
									className={`bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 ${
										formErrors.email && 'border-red-500'
									}`}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-3 text-sm font-medium text-slate-950">
									Password
								</label>
								{formErrors.password && (
									<div className="text-red-500 text-sm mb-3">
										{formErrors.password}
									</div>
								)}
								<input
									type="password"
									name="password"
									id="password"
									onChange={handleInputChange}
									value={userFormData.password}
									required
									className={`bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 ${
										formErrors.password && 'border-red-500'
									}`}
								/>
							</div>
							<button
								type="submit"
								onClick={validateForm}
								className="w-full text-white bg-zinc-400 hover:bg-zinc-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
								Sign up!
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
