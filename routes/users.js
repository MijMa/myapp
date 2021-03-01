var express = require('express');
var router = express.Router();
var fs = require('fs');
const app = require('../app.js');
var validator = require('../middleware/validator.js');


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

//Tämä on oikeastaan hyvin simppeli:
//kutsutaan exportattua funktiota 'validate' sillä datalla jonka app.put palauttaa.
//Sitten kutsutaan DataController.updatea ihan samalla??? datalla.
console.log(validator);
router.put('/users', validator);

//curl -X PUT -H "Content-Type: application/json" -d '{"key1":"value"}' "http://localhost:3000/users"

//kokeillaan JSON-lisäystä
fs.readFile('persontestdata.json', (err, data, validator, next) => {
  var person = JSON.parse(data);
  var today = JSON.stringify(new Date());
  person.currentdate = today;
  person = JSON.stringify(person, null, '\t');
  if (err) console.log(err);
    fs.writeFile('persontestdata.json', person, function() {
    });
});

module.exports = router;
