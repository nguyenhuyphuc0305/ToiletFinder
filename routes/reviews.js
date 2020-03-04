const express = require("express");

const router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tolietdb'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to tolietdb')
});

module.exports = router;