const fs = require('fs');

function createNewUser(studentId, studentName) {
	// Create new object for user
	const object = {
		id: studentId,
		name: studentName,
		surveys: [
			{
				survey: 'wafs',
				complete: false,
			},
			{
				survey: 'csstr',
				complete: false,
			},
			{
				survey: 'pwa',
				complete: false,
			},
			{
				survey: 'bt',
				complete: false,
			},
			{
				survey: 'rtwa',
				complete: false,
			},
			{
				survey: 'ucd',
				complete: false,
			},
		],
	};

	// Return object
	return object;
}

function authUser(studentId, studentName, req, res) {
	// Declare empty array
	let data = [];

	// Read data file
	const file = fs.readFileSync('./data/data.json', 'utf-8', (err) => {
		if (err) console.error(err);
	});

	// Parse JSON file to object
	const obj = JSON.parse(file);

	// Assign obj.users to data
	data = obj.users;

	// Check if user exists
	if (data.some((user) => user.id === studentId)) {
		// Get user data
		const user = data.filter((user) => {
			if (user.id === studentId) {
				return user;
			}
		});

		// Get id user
		const id = user[0].id;

		// If user exists, redirect to home page and pass user id as parameter
		return res.redirect(`/home/${id}`);
	} else {
		// Create new user object
		const newUser = createNewUser(studentId, studentName);
		// Push newUser object into obj
		obj.users.push(newUser);
		// Stringify object to JSON
		const json = JSON.stringify(obj);
		// Add data to JSON file
		fs.writeFileSync('./data/data.json', json, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('User created');
			}
		});
		return res.redirect(`/home/${studentId}`);
	}
}

module.exports = { authUser };
