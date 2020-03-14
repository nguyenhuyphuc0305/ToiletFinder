const express = require("express");
const request = require("request")
const router = express.Router();

// const mysql = require('mysql');
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'toiletdb'
// });
// db.connect((err) => {
// 	if (err) throw err;
// 	console.log('Connected to tolietdb')
// });

router.get("/testing", (req, res) =>{
	db.connect(function(err, connection){
		db.query('SELECT * FROM `reviews`', function (error, results, fields){
			console.log(results);
		});
	});
});

module.exports = router;