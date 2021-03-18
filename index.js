require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// Require routes
const login = require('./controller/routes/login.js');
const home = require('./controller/routes/home.js');
const survey = require('./controller/routes/survey.js');

// Set Handlebars as the template engine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/controller/views');
app.engine(
	'hbs',
	hbs({
		extname: 'hbs',
		defaultLayout: 'main',
	})
);

app.use(express.static(path.join(__dirname, '/public')))
	.use('/', login)
	.use('/home', home)
	.use('/survey/:id', survey);

app.listen(port, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Listening on port ${port}`);
	}
});
