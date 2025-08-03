const http = require('http');
const fs = require('fs')
const url= require('url');

const server = http.createServer((req, res) => {
    const log = `Request received from ${req.url} at ${ Date.now()} \n`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    fs.appendFile("./log.txt", log, (err, data) => {
         switch(myUrl.pathname){
            case '/': res.end("Hello From Node JS");
            break;
            case '/about': res.end(`Hello ${myUrl.query.myName} from About Page`);
            break;
            default: res.end("404 Not Found");
            break;
         }
    });
});

server.listen(8080 , () => {
    console.log("Server is listening on port 8080");
} )