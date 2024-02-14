// import logo from '../../assets/logo.png';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useState } from 'react';
// import profileLogo from '../../assets/profile-simple.svg'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div className=' flex justify-between items-center p-5'>
//       <Link to='/'>
//         <img src={logo} width={200} />
//       </Link>
//       <div>
//         <img src={profileLogo} onClick={handleClick} className='rounded-full hover:bg-gray-300 ' width='40' />
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             'aria-labelledby': 'basic-button',
//           }}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   )
// }

// export default Navbar\

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import profileSimple from '../../assets/profile-simple.svg';
import { Link } from 'react-router-dom';
const navigation = [];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="black-background">
			<>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex flex-shrink-0 items-center">
                <Link to='/'>
								<img
									className="h-8 w-auto"
									src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
									alt="Your Company"
								/>
                </Link>
							</div>
							<div className="hidden sm:ml-6 sm:block"></div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
								<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Profile dropdown */}
							<Menu as="div" className="relative ml-3">
								<div>
									<Menu.Button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="absolute -inset-1.5" />
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full"
											src={profileSimple}
											alt=""
										/>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active ? 'bg-gray-100' : '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													Your Profile
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active ? 'bg-gray-100' : '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													Settings
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active ? 'bg-gray-100' : '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													Sign out
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</>
		</Disclosure>
	);
}
