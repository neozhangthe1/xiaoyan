// Include Express Dependency
var express = require('express');
<<<<<<< HEAD
var app = express()
// Use environment PORT variable if it exists (for Heroku)
var port = process.env.PORT || 1234;
=======
var app = module.exports = express.createServer();
// Use environment PORT variable if it exists (for Heroku)
var port = process.env.PORT || 80;
>>>>>>> 25aa9cbf70683e3c0d8e222cf158e30bdb0238dc

// Configure Express to route all files in the current directory automatically
app.configure(function () {
    app.use(express.static(__dirname + '/'));
});

// Route a visit to root '/' to the index.html file
app.get('/', function (req, res) {
	res.redirect('/index.html');
});

// Start the web server
app.listen(port);
console.log('Server listening on port ' + port);
