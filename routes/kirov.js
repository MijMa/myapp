var express = require('express');
var router = express.Router();
var kirovjson = require('../kirov.json');

var kirovstats = "";
for (var i in kirovjson) {
    if (Array.isArray(kirovjson[i])) {
        for (var h in kirovjson[i])
        kirovstats += i + ": " + JSON.stringify((kirovjson[i])[h]) + "<br/>";
    } else {
        kirovstats += i + ": " + kirovjson[i] + "<br/>";
    }
}

router.get('/kirov/status', function(req, res, next) {
    //throw"foobar";
    res.send(kirovjson);
});

router.use('/kirov', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    res.send("<H1> kirov, reporting </H1>" + "<br/>" + kirovstats);
  });



module.exports = router;