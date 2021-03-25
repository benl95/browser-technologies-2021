const router = require('express').Router();

router.get('/home/:id', (req, res) => {
	res.render('home', {
		title: 'Minor Web Design & Development',
		id: req.params.id,
	});
});

module.exports = router;
