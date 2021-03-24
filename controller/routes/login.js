const router = require('express').Router();
const { authUser } = require('../../data/helpers/authUser');

router.get('/', (req, res) => {
	res.render('login', {
		title: 'Login',
	});
});

router.post('/', (req, res) => {
	const studentId = req.body.id;
	const studentName = req.body.name;
	authUser(studentId, studentName, req, res);
});

module.exports = router;
