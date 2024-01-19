const http = require("http");
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    console.log('URL: ', req.url)
    console.log(`Method: ${req.method}`)

    //lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('Hello everyone')
    })

    greet()
    greet()

    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-none':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break        
    }

    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err)
            res.end()
        }
        else{
            //res.write(data);
            res.end(data)
        }
    })
    
})
//package.json
//This is where all the dependencies will be present as these are the packages the project depends on
//dependencies are basically all the packages that we have installed locally in our project

//package-lock.json keeps track of the different version of the dependencies we have installed in our project. 

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
})

