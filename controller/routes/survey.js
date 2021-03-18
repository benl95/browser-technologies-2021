const router = require('express').Router();

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

router.get('/', (req, res) => {
	res.render('form', {
		title: 'Enquete',
		teachers: names,
	});
});

module.exports = router;
