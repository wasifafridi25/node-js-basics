const express = require('express');
const app = express();

//register view engines
app.set('view engine', 'ejs') //by default it will look in the views folder if you want a diff folder have to config that

app.listen(3000) 

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about') 
})
app.get('/blogs/create', (req, res) => {
    res.render('create') 
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//404
app.use((req, res) => {
    res.status(404).render('404')

})
