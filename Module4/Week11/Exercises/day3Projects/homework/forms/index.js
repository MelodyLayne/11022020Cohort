const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const app = express();
app.set('view engine', 'pug');
app.use(cookieParser())
app.use(express.urlencoded());
const guests = [];
const port = 8081;
const csrfProtection = csrf({ cookie: true });

const validateGuest = (req, res, next) => {
    const { fullName, email, numGuests } = req.body;
    const numGuestsNum = parseInt(numGuests, 10);
	const errors = [];

	if (!fullName) {
		errors.push('Please complete this field.');
	}
	if (!email) {
		errors.push('Please complete this field.');
	}
	if (!numGuests || numGuests < 1) {
		errors.push('Guests must be greater than zero.');
	}
	if (errors.length > 0) {
		res.render('guest-form', {
			title: 'Guest Form',
			errors,
			email,
			fullName,
			numGuests,
		});
		return;
	}
};

app.get('/',  (req, res) => {
	res.render('index', { title: 'Guest List', guests });
});

app.get('/guest-form', csrfProtection, (req, res) => {
	res.render('guest-form', { title: 'Guest Form', csrfToken: req.csrfToken });
});

app.post('/guest', csrfProtection, validateGuest, (req, res) => {
	if (errors.length > 0) {
		res.render('guest-form', {
			title: 'Guest Form',
			errors,
			email,
			fullName,
			numGuests,
		});
		return;
	}
	const guest = {
		fullname,
		email,
		numGuests
	};
	guests.push(guest);
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Server started on port ${[port]}`);
});
