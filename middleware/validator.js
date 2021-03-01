var express = require('express')
var yup = require('yup');


let schema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  age: yup.number().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  currentdate: yup.date().default(function () {
    return new Date();
  }),
});
 
console.log("validatormodule was called")
//console.log(validator());
  // check validity
function validator(err, req, res, next) {
  res.end().status(418);
  console.log('/n', "Validointifunktio kutusttu");
  if (err) throw"foobar";
  schema.isValid(req.body)
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


//Herjaa vain jos ei pysty validoida
function validoisyote() {
  schema.validate({ name: "jimmyboi", age: 11 }).catch(function (err) {
    console.log(err.name); // => 'ValidationError'
    console.log(err.errors); // => ['Deve ser maior que 18']
  });
}

//validoisyote();

/*
async function asynkroninenfunktio() {

  let lupaus = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log("promise kept succesfully")), 1000)
  })
  
  let odotetaanlupausta = await lupaus;
  console.log("lupausta odotettu");
}

asynkroninenfunktio().then(validointifunktio);
// \/
console.log("Tää tehdään ennenku muut ehtii suorittaa, lällälläää");
*/

module.exports = validator;