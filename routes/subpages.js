const express = require('express');
const router = express.Router();

router.get('/bulk', (req, res) => {
    res.render('bulk');
});

router.get('/markets', (req, res) => {
    res.render('markets');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/private-label', (req, res) => {
    res.render('privateLabel');
});

router.get('/grower-information', (req, res) => {
    res.render('growerInformation');
});

router.get('/brands', (req, res) => {
    res.render('brands');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/careers', (req, res) => {
    res.render('careers');
});

module.exports = router;