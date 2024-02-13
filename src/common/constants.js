const BASIC_URL = 'https://json-server-shop.adaptable.app/';

const ERRORS_SIGN_UP = {
	firstName: 'Name must contain only letters*',
	lastName: 'Last name must contain only letters*',
	email: 'Incorrect email',
	password:
		'Password must contain at least 1 capital letter and be  min. length 8 ',
	confirmPassword: 'Password must match',
	phoneNumber: 'Please enter the valid number',
	companyName: 'Company name must contain only letters',
	street: 'must contain only letters',
	city: 'must contain only letters',
	index: 'must contain only numbers',
};

export { BASIC_URL, ERRORS_SIGN_UP };
