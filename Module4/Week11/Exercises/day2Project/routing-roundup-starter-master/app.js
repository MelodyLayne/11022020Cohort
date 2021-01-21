const express = require('express');
const app = express();
const router = require('/routes');
const port = 8081;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.send('Hello from Express!');
});

app.get('/about/foo', (req, res) => {
	res.status(404);
	res.send('Error 404 Not Found');
});

app.get(/xyz$/, (req, res) => {
	res.send(`That's all I wrote.`);
});

app.get('/capital-letters/:id', (req, res) => {
	res.send(req.params.id.toUpperCase());
});

app.use('/margot', router);
app.use('/margeaux', router);

app.all('*', (req, res) => {
	const method = req.method;
	const path = req.path;
	const randomNumber = Math.floor(Math.random() * 10);
	res.render('index', { title: 'Practice', method, patch, randomNumber });
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
