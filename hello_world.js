const http = require('http');
http.createServer((req,res)=>{
    res.write("<html><h3>Hello World<h3><html>");
    res.end();
}).listen(7000);
console.log("Server running on port 7000");