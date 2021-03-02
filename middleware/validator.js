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
 
//console.log(validator());
  // check validity
  //(err, req, res, next) -rakenteita kutsutaan vain jos promiseketju heittää errorin
async function validator(req, res, next) { 
  
  console.log("\n", "Validointifunktio kutusttu");
  console.log(await (schema.isValid(req.body)));
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

/*
async function asynkroninenfunktio() {

  let lupaus = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log("promise kept succesfully")), 1000)
  })
  
  let odotetaanlupausta = await lupaus;
  console.log("lupausta odotettu");
}
*/

module.exports = validator;