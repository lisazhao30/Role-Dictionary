var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Role Dictionary"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Role Dictionary"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
