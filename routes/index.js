const express = require("express")
const path = require("path")
const request = require("request")


const router = express.Router()

const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'toiletdb'
});

db.connect((err) => {
	if (err) throw err;
	console.log('Connected to toiletdb')
});

router.get("/getLoc", (req, res) => {
	URL = "https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=false&unisex=true&lat=" + req.query.lat + "&lng=" + req.query.lng
	request.get(URL, (err,response, body) => {
		res.type("application/json")
		res.send(JSON.parse(body))
	})
})

router.get("/testing", (req, res) =>{
	db.connect(function(err, connection){
		db.query('SELECT * FROM `reviews`', function (error, results, fields){
			console.log(results);
		});
	});
	res.send();
});

router.post("/review", (req, res) =>{
	var id = req.query.id
	var comment = req.query.comment
	db.connect(function(err, connection){
		db.query('INSERT INTO reviews VALUES (' + id + ', 1, "'+comment+'", 0, 0);', function (error, results, fields){
			console.log(error);
		});
	});
	res.end(JSON.stringify(req.body.comment));
})


module.exports = router;