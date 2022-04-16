const express = require('express');
const path = require('path');

const app = new express();
app.use(express.static('public'));
const ejs = require('ejs');
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database:27017', {useNewUrlParser: true});

app.listen(5000, ()=> {
    console.log('App listening on port 5000');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/post', (req, res) => {
    res.render('post');
})