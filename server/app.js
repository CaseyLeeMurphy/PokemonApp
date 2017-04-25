// ----------------------------------- Show that something is happening --------------------------
// ------------------------------------------------------------------------------------------------
console.log('Loading Server');
const WEB = __dirname.replace('server', 'web');

// ----------------------------------- Load main modules ------------------------------------------
// ------------------------------------------------------------------------------------------------
const express = require('express');

// ----------------------------------- Load express middleware modules ----------------------------
// ------------------------------------------------------------------------------------------------
const logger = require('morgan');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const colors = require('colors');
const nconf = require('nconf');
const winston = require('winston');

// ----------------------------------- Load Routes  -----------------------------------------------
// ------------------------------------------------------------------------------------------------
const pokeMain = require('./routes/pokeMain');


// ----------------------------------- create express app -----------------------------------------
// ------------------------------------------------------------------------------------------------
var app = express();

// ------------------------------------- Insert Middleware-----------------------------------------
// ------------------------------------------------------------------------------------------------
app.use(logger('dev'));
app.use(compression());
app.use(favicon(WEB + '/img/greatBall.png'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(pokeMain);

// ----------------------------------- traditional webserver stuff for serving static files -------
// ------------------------------------------------------------------------------------------------
app.use(express.static(WEB));
app.get('*', function(req, res) {
    res.status(404).sendFile(WEB + '/404Error.html');
});

var server = app.listen(3000);

// ----------------------------------- Gracefullly shutdown ---------------------------------------
// ------------------------------------------------------------------------------------------------
function gracefullShutdown() {
    console.log('\nStarting Shutdown');
    server.close(function() {
        console.log('\nShutdown Complete');
    });
}

process.on('SIGTERM', gracefullShutdown);
process.on('SIGINT', gracefullShutdown);

console.log('Now listening');