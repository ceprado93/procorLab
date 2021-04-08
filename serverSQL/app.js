require('dotenv').config()

// DB connection
const MYSQL = require('mysql');
const DB_CONFIG = require('./config/db.config')
const CONNECTION = MYSQL.createConnection(DB_CONFIG.dbConfiguration)
console.log(DB_CONFIG.dbConfiguration)

CONNECTION.connect(function (err) {

    // Print Error 
    if (err) { console.error(err) }
    console.log('Conectado con el identificador ' + conexion.threadId);

});

// Debug
require('./config/debug.config')

// App
const express = require('express')
const app = express()

// App settings
require('./config/locals.config')(app)
require('./config/cors.config')(app)

// Routes index
require('./routes')(app)

// Error handling
require('./config/error-handlers.config')(app)

module.exports = app