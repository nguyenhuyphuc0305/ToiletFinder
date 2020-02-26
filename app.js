const express = require("express")

const app = express()
const port = 8080;

app.use(express.static("public"))

app.use(require("./routes"))

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))