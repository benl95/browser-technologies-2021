const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('form', {
		title: 'Enquete',
	});
});

module.exports = router;
