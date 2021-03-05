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

//(err, req, res, next) -rakenteita kutsutaan vain jos promiseketju heittää errorin
async function validator(req, res, next) {

  var currentdatestring = JSON.parse(req.body.currentdate);
  var currentdateobj = new Date(currentdatestring);
  req.body.currentdate = currentdateobj;

  try {
    console.log(await schema.validate(req.body));
    await schema.validate(req.body);
    return next();
  } catch (e) {
    const {errors, path} = e;
    return res.status(400).json({errors, path});
  }
};


function isNumValid(num) {
  if (num >= 70) {
      return false
  } else if (num <= 10) {
      return false
  } else {
      return true
  }
}

//Herjaa vain jos ei pysty validoida
/*async function validoisyote() {

  jsonobj = {
    id: "aknowledged",
    name: "optimal",
    age: "3",
    email: "kirov.ready@redarmy.ru",
    website: "https://www.set.ru",
    currentdate: "\"2021-03-03T09:24:55.346Z\""
  };
  var currentdatestring = JSON.parse(jsonobj.currentdate);
  var currentdateobj = new Date(currentdatestring);
  console.log(currentdateobj);
  jsonobj.currentdate = currentdateobj;

  try {
    schema.isValid(jsonobj);
    return next();
  } catch (e) {
    const {errors, path} = e;
    return e;
  }
}
validoisyote();*/

module.exports = {validator, isNumValid};
