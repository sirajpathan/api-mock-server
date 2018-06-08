var env = "dev";
var http = require('http');
 
let fs = require('fs');
let config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

http.createServer(function (req, res) {
    headers(res, req.method === "OPTIONS");
    let url = req.url;
    if (req.method !== "OPTIONS") {
        writeData(res, req.method, url);
    } else {
        console.log("END");
        res.end();
    }
}).listen(9001);

let headers = (res, options)=>{
    let head = { 
        'Access-Control-Allow-Headers': 'Content-Type,X-CSRF-TOKEN,Origin',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
        'Access-Control-Allow-Origin': 'http://local.morningstar.com:8080',
        'status': '200',
        'access-control-allow-credentials': 'true',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Connection': 'keep',
        'Date': 'Wed, 06 Jun 2018 05:12:02 GMT'
    };
    if (options) {
        head['content-length'] = '0';
    }
    res.writeHead(200, head);
}

let writeData = (res, method, url) => {
    if(typeof config[method][url] === "undefined") {
        res.write("undefined path");
    } else {
        res.write(config[method][url]);
    }
    console.log("GET END");
    res.end();
}
