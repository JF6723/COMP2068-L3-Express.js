let express = require('express');

// create a new express application
let app = express();

// home page fn
let index = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home</h1>');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Not Found</h1>');
        res.end();
    }
};

let about = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About</h1>');
    res.end();
};

// load pages
app.use('/about', about);
app.use('/', index);

// start express server
app.listen(3000);
console.log('Express running on port 3000');