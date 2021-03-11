require('dotenv').config();

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./router');
const { serverError } = require('./controllers/errorHandling');

const app = express();

app.set('port', process.env.PORT || 5000);
app.disable('x-powered-by');

app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

app.use(serverError);
module.exports = app;
