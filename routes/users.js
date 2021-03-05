var express = require('express');
var router = express.Router();
var fs = require('fs');
const app = require('../app.js');
var validator = require('../middleware/validator.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* PUT Validate received json. */
router.put('/', validator, vastaanotaPUT);

function vastaanotaPUT(req, res, next) {
  fs.readFile('./persontestdata.json', (err, data) => {
    var person = JSON.stringify(req.body, null, '\t');
    fs.writeFile('persontestdata.json', person, function() {
    });
  });
  res.send("Ur a good bot, thanks for the PUT. You don't deserve an error ^^");
}

module.exports = router;
