// Dependencies
var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes/profile");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });