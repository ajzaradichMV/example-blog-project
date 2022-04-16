const express = require('express')
const path = require('path')

const app = new express()
app.use(express.static('public'))
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.listen(5000, ()=> {
    console.log('App listening on port 5000')
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/pages/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/pages/about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/pages/contact.html'))
})

app.get('/post', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public/pages/post.html'))
})