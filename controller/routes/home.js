const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home', {
		title: 'Minor Web Design & Development',
	});
});

module.exports = router;
