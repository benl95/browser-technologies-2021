const router = require('express').Router();
const {
	getDataFile,
	parseData,
	findUserSurveys,
	getCompleteStatus,
} = require('../../data/helpers/surveyData');

router.get('/home/:id', (req, res) => {
	const id = req.params.id;
	const file = getDataFile();
	const data = parseData(file);
	const userSurveys = findUserSurveys(data, id);
	const surveys = getCompleteStatus(userSurveys);

	res.render('home', {
		title: 'Minor Web Design & Development',
		id: req.params.id,
		data: surveys,
	});
});

module.exports = router;
