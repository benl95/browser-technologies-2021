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
	// Convert JSON file to object
	const obj = JSON.parse(file);
	// Push object into array
	data.push(obj);
	// Check if user exists
	if (data.some(({ id }) => id === studentId)) {
		// If user exists, redirect to home page
		return res.redirect('/home');
	} else {
		// Create new object
		const newUser = createNewUser(studentId, studentName);
		// Push newUser into data array
		data.push(newUser);
		// Convert array back to JSON
		const dataToJSON = JSON.stringify(data, null, 2);
		// Add data to JSON file
		fs.writeFileSync('./data/data.json', dataToJSON, (err) => {
			if (err) throw err;
			else console.log('New user created');
		});
		return res.redirect('/home');
	}
}

module.exports = { authUser };
