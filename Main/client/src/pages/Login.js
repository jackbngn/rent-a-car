import React, { useState } from 'react';
import SignUp from './SignUp';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
	const [formErrors, setFormErrors] = useState({});

	const [loginUser, { error }] = useMutation(LOGIN);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await loginUser({
				variables: userFormData,
			});
			if (error) {
				throw new Error('Something went wrong!');
			}

			const { token } = data.login;
			console.log(data);
			Auth.login(token);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className="">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-4 space-y-2 md:space-y-6 sm:p-8">
						<h1 className="text-xl leading-tight tracking-tight text-slate-400 md:text-2xl">
							Login
						</h1>
						<form
							onSubmit={handleFormSubmit}
							className="space-y-4 md:space-y-6">
							<div>
								<label
									htmlFor="username"
									className="block mb-3 text-sm font-medium text-slate-950">
									Username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									value={userFormData.username}
									onChange={handleInputChange}
									className="bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5"
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-3 text-sm font-medium text-slate-950">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									value={userFormData.password}
									onChange={handleInputChange}
									className="bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5"
								/>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-zinc-400 hover:bg-zinc-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
			<SignUp />
		</section>
	);
}
