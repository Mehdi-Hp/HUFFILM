const app = require('express')();

app.route('/')
	.get((req, res, next) => {
		res.send('api => GET');
	});

app.use('/find', require('./api/findMeta'));
app.use('/meta', require('./api/getMeta'));
app.use('/user', require('./api/users'));
app.use('/:username?/movies', (req, res, next) => {
	res.locals.customUser = req.params.username;
	next();
}, require('./api/movies'));
app.use('/:username?/lists', (req, res, next) => {
	res.locals.customUser = req.params.username;
	next();
}, require('./api/lists'));

module.exports = app;
