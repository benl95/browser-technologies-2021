const router = require('express').Router();
const fs = require('fs');

const names = [
	'Vasilis van Gemert',
	'Justus Sturkenboom',
	'Guido Bouwman',
	'Peter Paul Koch',
	'Suus ten Voorde',
	'Joost Faber',
	'Sanne t Hooft',
	'Declan Rek',
	'Koop Reynders',
];

function storeDataInJsonFile(data) {
	const dataToJson = JSON.stringify(data);
	return fs.appendFileSync(
		'./data/survey.json',
		dataToJson + ',\n',
		(error) => {
			if (error) throw error;
		}
	);
}

router.get('/survey/:course/:id', (req, res) => {
	res.render('form', {
		title: 'Enquete',
		teachers: names,
		course: req.params.course,
		id: req.params.id,
	});
});

router.post('/survey/:course/:id', (req, res) => {
	console.log(req.body);
	storeDataInJsonFile(req.body);
	res.redirect('/home/:id');
});

module.exports = router;
