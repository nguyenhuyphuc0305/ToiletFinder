const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(require("./routes"));
app.listen(port, () => console.log(`Listening on port ${port}!`));