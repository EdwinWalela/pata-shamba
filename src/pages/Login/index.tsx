import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { loginUser } from './slice';
import Loader from '../../common/loader';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useAppDispatch();
	const loginState = useAppSelector((state) => state.login);
	const { state } = useLocation();
	const newAccount = state !== null;

	function submitForm(e: React.FormEvent) {
		e.preventDefault();
		dispatch(
			loginUser({
				email,
				password,
				phoneNumber: '',
				username: '',
			})
		);
	}

	function updateEmail(e: React.FormEvent<HTMLInputElement>) {
		setEmail(e.currentTarget.value);
	}

	function updatePassword(e: React.FormEvent<HTMLInputElement>) {
		setPassword(e.currentTarget.value);
	}
	if (loginState.token) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<>
			<section className="">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-8 lg:py-0">
					<div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							{loginState.hasError && (
								<p className="bg-red-400 text-white p-3 text-center rounded-md shadow-md">
									{loginState.errorMessage}
								</p>
							)}
							<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-xl ">
								{newAccount && 'Sign In To Create Your First Survey'}
								{!newAccount && 'Welcome back'}
							</h1>
							<form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={updateEmail}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="name@company.com"
										required={true}
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={updatePassword}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										required={true}
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									{loginState.isLoading && <Loader />}
									{!loginState.isLoading && 'Sign in'}
								</button>
								<p className="text-sm font-light ">
									Don't have an account?{' '}
									<Link to="/sign-up" className="font-medium text-primary-600 hover:underline">
										Register here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
