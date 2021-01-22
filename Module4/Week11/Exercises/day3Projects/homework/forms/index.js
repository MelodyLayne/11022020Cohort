const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded());
const guests = [];
const port = 8081;

app.get('/', (req, res) => {
    res.render('index', { title: 'Guest List', guests });
})

app.get('/guest', (req, res) => {
    res.render('guest-form', {title: 'Guest Form'})
})

app.post('/guest', (req, res) => {
    const guest =  {
        fullname: req.body.fullname,
        email: req.body.email,
        numGuest: req.body.numGuests
    };
    guests.push(guest);
    res.redirect('/')

} )

app.listen(port, () => {
    console.log(`Server started on port ${[port]}`);
});
