const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const helmet = require('helmet');
const pug = require('pug');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname,'public')));

const mainRoute = require('./routes/index');
const subRoutes = require('./routes/subpages');

app.use('/', mainRoute);
app.use('/sub', subRoutes);

app.use((req, res, next) => {
    const err = new Error("Page Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.staus || 500);
    res.render("error");
});

module.exports= app;