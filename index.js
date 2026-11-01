const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Make the public folder accessible to the browser
app.use(express.static(path.join(__dirname, 'public')));

// GET request to display the EJS page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/services', (req, res) => {
    res.render('services');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});