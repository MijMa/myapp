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
  try {
    await schema.isValid(req.body);
    return next();
  } catch (e) {
    const {errors, path} = e;
    return res.status(400).json({errors, path});
  }

  
};


//Herjaa vain jos ei pysty validoida
function validoisyote() {

  jsonobj = {
    id: "aknowledged",
    name: "optimal",
    age: "set",
    email: "ready",
    website: "set",
    currentdate: "\"2021-03-03T09:24:55.346Z\""
  };
  currentdatejson = JSON.parse(jsonobj.currentdate)
  currentdateobj = new Date(currentdatejson);
  console.log(currentdateobj);
  jsonobj.currentdate = currentdateobj;
  schema.validate(jsonobj).catch(function (err) {
    console.log(err.name); // => 'ValidationError'
    console.log(err.errors); // => ['Deve ser maior que 18']
  });
}
validoisyote();
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