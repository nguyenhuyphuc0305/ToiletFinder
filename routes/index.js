const express = require("express")
const path = require("path")
const request = require("request")


const router = express.Router()
const flickrKey = require("../flickr_API.json")

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
	request.get(URL, (err, response, body) => {
		res.type("application/json")
		res.send(JSON.parse(body))
	})
})

router.get("/getImg", (req, res) => {
	URL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + flickrKey.key + "&lat=" + req.query.lat + "&lon=" + req.query.lng + "&radius=0.01&page=1&format=json&nojsoncallback=1"
	request.get(URL, (err, response, body) => {
		res.type("application/json")
		res.send(JSON.parse(body).photos.photo)
	})
})

router.post("/comment", (req, res) =>{
	var id = req.query.id
	var comment = req.query.comment
	var time = req.query.time
	db.connect(function(err, connection){
		db.query('INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (' + id + ', 1, "'+comment+'", "'+time+'");', function (error, results, fields){
			console.log(error);
			console.log(results)
		});
	});
	res.end();
})


module.exports = router;