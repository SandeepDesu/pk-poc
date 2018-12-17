var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();
    mongoose.connect('mongodb://localhost:27017/sample');
app.use([bodyParser.json({ extended: true }), bodyParser.urlencoded({ extended: true })]);
app.use(function (req, res, next) {
    res.header('Allow-Access-Allow-Origin','*');
    next();
});
app.use('/v1',require('./routes'));
app.listen(8000);