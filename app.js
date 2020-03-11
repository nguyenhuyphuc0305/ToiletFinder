const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors")

app.use(cors());
app.use(express.static("public"));

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));  

app.use(require("./routes"));
app.listen(port, () => console.log(`Listening on port ${port}!`));