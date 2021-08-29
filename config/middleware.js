const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const multer = require('multer');

const { fileStorage, fileFilter } = require('./multer');

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: false }));

    app.set('view engine', 'ejs');
    app.set('views', 'views');

    app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
    app.use('/images', express.static(path.join(__dirname, '..', 'images')));

    app.use(express.static(path.join(__dirname, '..', 'public')));
}