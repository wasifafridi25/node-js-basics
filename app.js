const express = require('express');
//express app
const app = express();

//listen for requests
app.listen(3000) //here we don't have to explicitly mention localhost it auto detects

app.get('/', (req, res) => {
    // res.send("<p>Hello everyone!</p>") 
    //here no need to set header and most status codes also auto set

    res.sendFile('./Clients and Servers/views/index.html', {root: __dirname}) //we need to provide the __dirname
    //cause it looks for the absolute path from the __dirname and not just the relative path
})
app.get('/about', (req, res) => {
    res.sendFile('./Clients and Servers/views/about.html', {root: __dirname}) 
})

//redirects using express
app.get('/about-us', (req, res) => {
    res.redirect('/about')

})

//404
app.use((req, res) => {
    // res.sendFile('./Clients and Servers/views/404.html', {root: __dirname}) 
    //however on this case we need to attach the statuscode but we can chain it as we get back the res obj

    res.status(404).sendFile('./Clients and Servers/views/about.html', {root: __dirname})

})
//express will go over all one by one and if there's a match with the route will send that file, if not will check
//for next one, will carry one till it doesn't find any and obviously this will fire if no other routes match
//always have this at the bottom