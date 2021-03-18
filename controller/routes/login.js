const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('login', {
		title: 'Login',
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	res.redirect('/home');
});

module.exports = router;
