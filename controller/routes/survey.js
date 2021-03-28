const router = require('express').Router();
const {
	getParams,
	getDataFile,
	parseData,
	findUser,
} = require('../../data/helpers/surveyData');
const { loadData } = require('../../data/helpers/form');

router.get('/survey/:course/:id', (req, res) => {
	const course = req.params.course;
	const names = loadData(course);

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
