var express = require('express');
var router = express.Router();

//this fails due to ts syntax var text:string = "This is a typescript variable called text";
//console.log(text);

/* GET user. */
router.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
router.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})

module.exports = router;
