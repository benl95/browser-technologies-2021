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
		'./data/survey-data.json',
		dataToJson + ',\n',
		(error) => {
			if (error) throw error;
		}
	);
}

router.get('/', (req, res) => {
	res.render('form', {
		title: 'Enquete',
		teachers: names,
		id: req.params.id,
	});
});

router.post('/', (req, res) => {
	storeDataInJsonFile(req.body);
	res.redirect('/home');
});

module.exports = router;
