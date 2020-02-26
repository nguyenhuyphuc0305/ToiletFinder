const express = require("express")
const path = require("path")
const request = require("request")

const router = express.Router()

router.get("/getLoc", (req, res) => {
    URL = "https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=false&unisex=true&lat=" + req.query.lat + "&lng=" + req.query.lng
    request.get(URL, (err,response, body) => {
        res.type("application/json")
        res.send(JSON.parse(body))
    })
})

module.exports = router 