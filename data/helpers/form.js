const fs = require('fs');

function parseFile(data) {
	const parse = JSON.parse(data);
	const courses = parse.courses;

	return courses;
}

function getTeachersFile() {
	const file = fs.readFileSync('./data/teachers.json', 'utf-8', err => {
		if (err) console.log(err);
	});

	const data = parseFile(file);
	return data;
}

function loadData(param) {
	const data = getTeachersFile();

	const teachers = data.filter(course => {
		if (course.id === param) {
			return course;
		}
	});
	return teachers;
}

module.exports = { parseFile, getTeachersFile, loadData };
