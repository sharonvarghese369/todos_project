// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('server local host');
// });

// server.listen(3000, () => {
//     console.log('http://localhost:3000/');
// });

// const http =require


const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    console.log(req.method, 'method');
    console.log(req.url, 'url');

    if (req.method === 'GET') {
        let fileName;

        if (req.url === '/' || req.url === '/home') {
            fileName = 'index.html';
        } else if (req.url === '/profile') {
            fileName = 'profile.html';
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 page not found');
            return;
        }

        const filepath = path.join(__dirname, fileName);
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('');
                return;
            }
            fs.ren
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
