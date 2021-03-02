var express = require('express');
var router = express.Router();
var fs = require('fs');
const app = require('../app.js');
var validator = require('../middleware/validator.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', validator);

//kokeillaan JSON-lisäystä, kun ERR ottaa pois, Cannot set property 'currentdate' of null -tarkasta suoritusjärj
fs.readFile('./persontestdata.json', (err, data) => {
  //AWAIT!?
  setTimeout(() => {
    console.log("I waited for a while", data);
  }, 3000);
  console.log("File, read");
  var person = JSON.parse(data);
  var today = JSON.stringify(new Date());
  person.currentdate = today;
  person = JSON.stringify(person, null, '\t');
  fs.writeFile('persontestdata.json', person, function() {
    console.log("File, written");
  });
});

module.exports = router;