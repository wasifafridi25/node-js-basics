const express = require('express');
const app = express();

//register view engines
app.set('view engine', 'ejs') //by default it will look in the views folder if you want a diff folder have to 
//config that

app.listen(3000) 

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    
      res.render('index', { title: 'Home', blogs})
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About'}) 
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create blog'}) 
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})

})
