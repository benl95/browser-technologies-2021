const router = require('express').Router();
const fs = require('fs');
const {
	getParams,
	getDataFile,
	parseData,
	findUser,
} = require('../../data/helpers/surveyData');

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

router.get('/survey/:course/:id', (req, res) => {
	res.render('form', {
		title: 'Enquete',
		teachers: names,
		course: req.params.course,
		id: req.params.id,
	});
});

router.post('/survey/:course/:id', (req, res) => {
	const file = getDataFile();
	const data = parseData(file);
	const params = getParams(req, res);
	const postData = req.body;

	findUser(data, params, postData);

	res.redirect(`/home/${params.id}`);
});

module.exports = router;
