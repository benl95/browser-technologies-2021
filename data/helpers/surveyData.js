const fs = require('fs');

function getParams(req, res) {
	const params = {
		id: req.params.id,
		course: req.params.course,
	};

	return params;
}

function getDataFile() {
	const file = fs.readFileSync(`./data/data.json`, 'utf-8', (err) => {
		if (err) console.log(err);
	});

	return file;
}

function parseData(data) {
	const parse = JSON.parse(data);
	const users = parse.users;

	return users;
}

function findUser(data, params, postData, req, res) {
	console.log(data);

	data.forEach((entry) => {
		if (entry.id === params.id) {
			const surveys = entry.surveys;
			const course = surveys.find(
				(course) => course.survey === params.course
			);
			course.answers = postData;
			course.complete = true;

			const obj = {
				users: data,
			};

			const json = JSON.stringify(obj);

			fs.writeFileSync('./data/data.json', json, 'utf-8', (err) => {
				if (err) console.log(err);
			});
		}
	});
}

module.exports = { getParams, getDataFile, parseData, findUser };
