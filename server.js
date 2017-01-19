// Get dependencies
const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerApplication');
// mongoose.connect('mongodb://localhost/27017/beerApplication');


// Get our API routes
const api = require('./server/routes/api');
const beersApi = require('./server/routes/beersRoute'); 
const userApi = require('./server/routes/userRoute');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
app.use('/api', api);
app.use('/beersApi', beersApi);
app.use('/userApi', userApi);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
