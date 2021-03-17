var express = require('express');
var router = express.Router();

/* GET user. */
router.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('User Info');
});
// handler for the /user/:id path, which prints the user ID
router.get('/user/:id', function (req, res, next) {
    res.end(req.params.id);
});
function validator(err, req, res, next) {
    //console.log(br, "Validointifunktio kutusttu", br);
    if (err)
        throw "foobar";
    next(); //Tarvitaanko tätä?
}

module.exports = router;
