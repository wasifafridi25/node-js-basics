const http = require("http");
const fs = require('fs')

//we don't have to store the server in a variable but we can if we want to use it in the future for stuff like web sockets

//the call back function will run everytime a client/browser sends a request
//so as arguments we have the request, every info about the request, like if it's a get req(get the html page), post request(post sth)
//suppose we request www.myweb.com/about so will send the about page, that info is in the req
// and we send the response which is an object which we send the user which is the browser
const server = http.createServer((req, res) => {
    console.log('URL: ', req.url)
    console.log(`Method: ${req.method}`)

    //response headers give browser little bit of info about the response coming like what kind of data we are sending back 
    //is it text, html, json, etc
    //we can also use the response headers to set cookies 

    //3 steps
    //set header content type
    //res.write()
    //and res.end()
            // btw can directly do res.end(data)

    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html')

    // res.write('<p>Hello Afridi</p>');
    // res.write('<div>Hello again, Afridi</div>');
    // res.write('<button>Submit</button>');
    // res.end();
    fs.readFile('./views/index.html', (err, data) => {
        if (err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data);
            res.end()
        }
    })
    
    

    

})

//but we have to listen or else server not really doing anything

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
})



//localhost - listen for requests coming to our own pc
//localhost is like a domain name on the web but this one takes to a very specific ip address which is 127.0.0.1 which points directly to our
//pc
//the browser is then actually connecting back to our own pc which is then acting as a host for our website
//so this is how we can use our own pc as a host when we develop our own website


//ports are like doors into a computer through which internet communications can be made to diff programs
//it represents a specific port/gateway on our computer for a certain bit of sotware or server that should communicate through
//skype, discord mail apps all coonect to internet to send and recieve data, they all do this by using diff port
//numbers to keep info separate 