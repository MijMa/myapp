var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
  res.send('we got a post request to about -page')
})


module.exports = router;
