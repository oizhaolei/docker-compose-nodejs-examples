const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const app = express();

// Use body parser for requests with JSON payloads
app.use(bodyParser.json());

// Configure Mustache templates
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// initialize database
database.init();

// Connect routers
app.use(require('./site/router'));
app.use('/api', require('./api/router'));

const port = 3000;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});