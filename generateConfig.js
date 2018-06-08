let fs = require('fs');
let data = fs.readFileSync("./local.morningstar.com.har", "utf-8");
data = JSON.parse(data).log.entries;
console.log(process.argv[2]);
let filterUrl = process.argv[2];

let config = {
    "GET": {},
    "POST": {},
    "PUT": {},
    "PATCH": {},
    "DELETE": {},
    "HEAD": {}
};
let a = data.forEach(x => {
    if (x.request.url.indexOf(filterUrl) !== -1 && x.request.method !== "OPTIONS") {
        config[x.request.method][x.request.url.replace(filterUrl, "")] = x.response.content.text;
    }
});
fs.writeFileSync("./config.json", JSON.stringify(config, null, 2), "utf-8");