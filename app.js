let express = require('express');
let path = require('path');

// create a new express application
let app = express();
console.log(`Dirname: ${__dirname}`);
let viewPath = path.join(__dirname, '/views');

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

// GET: /hello/Beni
let hello = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Hello ${req.params.name}</h1>`);
    res.end();
};

let redirect = (req, res) => {
    res.redirect('/');
};

let contact = (req, res) => {
    res.sendFile(`${viewPath}/contact.html`);
}

let services = (req, res) => {
    res.sendFile(`${viewPath}/services.html`);
}

// load pages
// : indicates a param value not a hard-coded part of a url request
app.use('/about', about);
app.use('/hello/:name', hello);
app.use('/redirect', redirect);
app.use('/contact', contact);
app.use('/services', services);
app.use('/', index);

// start express server
app.listen(3000);
console.log('Express running on port 3000');