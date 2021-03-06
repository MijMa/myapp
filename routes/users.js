var express = require('express');
var router = express.Router();
var fs = require('fs');
const app = require('../src/app');
var validator = require('../middleware/validator.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* PUT Validate received json. */
router.put('/', validator.validator, vastaanotaPUT);

async function vastaanotaPUT(req, res, next) {
    try {
      var person = JSON.stringify(req.body, null, '\t');
      await fs.writeFile('persontestdata.json', person, () => {
      })
      
    } catch (err) {
      console.log('Error writing persontestdata.json:' + err.message)
    }
    
  res.send("Ur a good bot, thanks for the PUT. You don't deserve an error ^^");
}

module.exports = router;
