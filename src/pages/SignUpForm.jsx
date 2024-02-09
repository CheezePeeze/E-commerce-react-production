import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
	const [isCorporate, setIsCorporate] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [test, setTest] = useState();
	const navigate = useNavigate();

	const [userStorage, setUserStorage] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		isCorporate: isCorporate,
	});
	const [corporateStorage, setCorporateStorage] = useState({
		phoneNumber: '',
		companyName: '',
	});
	const [addressStorage, setAddressStorage] = useState({
		street: '',
		city: '',
		index: '',
	});
	const userHandleChange = (event) => {
		// console.log(event.target.value);
		const { name, value } = event.target;
		console.log(value);
		setUserStorage((prevUserStorage) => ({
			...prevUserStorage,
			[name]: value,
		}));
	};
	const corporateHandleChange = (event) => {
		const { name, value } = event.target;
		console.log(value);
		setCorporateStorage((prevCorporateStorage) => ({
			...prevCorporateStorage,
			[name]: value,
		}));
	};
	const addressHandleChange = (event) => {
		let { name, value } = event.target;
		console.log(name);
		if (name === 'index') {
			if (isNaN(+value)) {
				value = value.replace(/[^0-9]/g, '');
			}
		}
		setAddressStorage((prevAddressStorage) => ({
			...prevAddressStorage,
			[name]: value,
		}));
	};
	const checkCorporateHandler = () => {
		setIsCorporate(true);
	};
	const checkUserHandler = () => {
		setIsCorporate(false);
	};
	console.log(isCorporate);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isCorporate) {
			console.log({
				...userStorage,
				corporateInfo: {
					...corporateStorage,
					companyAddress: { ...addressStorage },
				},
			});
		} else {
			console.log({ ...userStorage });
		}
		// axios.post(url, {
		// 	...userStorage,
		// 	corporateInfo: {
		// 		...corporateStorage,
		// 		companyAddress: { ...addressStorage },
		// 	},
		// });
	};
	// console.log(`form submitted=> ${}`);

	return (
		<div className="container mx-auto px-4 py-4">
			<form onSubmit={handleSubmit} className="max-w-md mx-auto">
				<h3 className=" text-center">Choose type of Account</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
					<label>
						<input
							onChange={checkUserHandler}
							type="radio"
							value="1"
							className="peer hidden"
							name="framework"
							defaultChecked
						/>

						<div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
							<h2 className="font-medium text-gray-700">User</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</label>

					<label>
						<input
							onChange={checkCorporateHandler}
							type="radio"
							value="1"
							className="peer hidden"
							name="framework"
						/>

						<div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
							<h2 className="font-medium text-gray-700">Corporate</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</label>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<input
							onChange={userHandleChange}
							value={userStorage.firstName}
							name="firstName"
							type="text"
							id="floating_first_name"
							className=" pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_first_name"
							className="peer-focus: ml-2 font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							First name
						</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input
							value={userStorage.lastName}
							onChange={userHandleChange}
							type="text"
							name="lastName"
							id="floating_last_name"
							className="pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_last_name"
							className="peer-focus:font-medium ml-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Last name
						</label>
					</div>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						value={userStorage.email}
						onChange={userHandleChange}
						type="email"
						name="email"
						id="floating_email"
						className="pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						required
					/>
					<label
						htmlFor="floating_email"
						className="peer-focus:font-medium ml-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						value={userStorage.password}
						onChange={userHandleChange}
						type="password"
						name="password"
						id="floating_password"
						className="block py-2.5 px-0 w-full pl-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_password"
						className="peer-focus:font-medium absolute ml-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Password
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						value={userStorage.confirmPassword}
						onChange={userHandleChange}
						type="password"
						name="confirmPassword"
						id="floating_repeat_password"
						className="pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_repeat_password"
						className="peer-focus:font-medium absolute ml-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Confirm password
					</label>
				</div>
				{isCorporate && (
					<div className="relative z-0 w-full mb-5 group">
						<div className="relative z-0 w-full mb-5 group">
							<input
								value={corporateStorage.phoneNumber}
								onChange={corporateHandleChange}
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								name="phoneNumber"
								id="floating_phone"
								className="pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="phoneNumber"
								className="peer-focus:font-medium absolute ml-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Phone number (123-456-7890)
							</label>
						</div>
						<div className="relative z-0 w-full mb-5 group">
							<input
								value={corporateStorage.companyName}
								onChange={corporateHandleChange}
								type="text"
								name="companyName"
								id="floating_company"
								className="pl-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="companyName"
								className="peer-focus:font-medium absolute ml-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Company Name (Ex. Google)
							</label>
						</div>
						<div className="relative z-0 w-full mb-5 group">
							<h3 className=" text-center">Company Address</h3>
							<div className="relative z-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
								<input
									name="street"
									value={addressStorage.street}
									onChange={addressHandleChange}
									className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Street"
									type="text"
								/>

								<input
									name="index"
									value={addressStorage.index}
									onChange={addressHandleChange}
									className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Index"
									type="text"
									maxLength="6"
								/>

								<input
									name="city"
									value={addressStorage.city}
									onChange={addressHandleChange}
									className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="City"
									type="text"
								/>
							</div>
						</div>
					</div>
				)}
				<div className="w-full ">
					<button
						type="submit"
						className="my-0 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;