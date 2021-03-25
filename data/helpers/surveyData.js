const fs = require('fs');

function getParams(req, res) {
	const params = {
		id: req.params.id,
		course: req.params.course,
	};

	return params;
}

function getDataFile(file) {
	const file = fs.readFileSync(`./data/${file}`, 'utf-8', (err) => {
		if (err) console.log(err);
	});

	return file;
}

function parseData(data) {
	const data = JSON.parse(data);
	const users = data.users;

	return users;
}

module.exports = { storeUserSurveyData };
