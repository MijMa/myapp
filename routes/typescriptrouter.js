var express = require('express');
var router = express.Router();
//this fails due to ts syntax var text:string = "This is a typescript variable called text";
//console.log(text);
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
    //schema.isValid(req.body)
    next(); //Tarvitaanko tätä?
    /*schema
    .isValid({
      name: "jim",
      id: 1245724124,
      age: 24,
    })
    .then(function (valid) {
        console.log(valid); // => true/false
    }); */
}
module.exports = router;
