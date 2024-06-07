const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryObject = parsedUrl.query;
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        const filePath = path.join(__dirname, 'q3.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (pathname === '/calculate') {
        const op = queryObject.op;
        const x = parseFloat(queryObject.x);
        const y = parseFloat(queryObject.y);
        let result;

        switch (op) {
            case 'add':
                result = x + y;
                break;
            case 'subtract':
                result = x - y;
                break;
            case 'multiply':
                result = x * y;
                break;
            case 'divide':
                if (y !== 0) {
                    result = x / y;
                } else {
                    result = 'Error: Division by zero';
                }
                break;
            default:
                result = 'Error: Unknown operation';
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Result: ${result}`);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Calculator server running on port ${port}`);
});
