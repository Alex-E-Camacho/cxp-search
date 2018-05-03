const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./server/routes/index.js')(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
    

app.get('*', (req,res) => res.status(200).send({
    message: 'Welcome to Azure CXP Search'
}));

module.exports = app;