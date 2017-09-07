const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const pug = require('pug');
const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static('public'));

app.set('view engine', "pug");

const mainRoute = require('./routes/index');
const subRoutes = require('./routes/subpages');

app.use('/', mainRoute);
app.use('/sub', subRoutes);

app.listen(3000);