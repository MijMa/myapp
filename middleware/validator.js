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
  sentdate: yup.string()
  
});

//(err, req, res, next) -rakenteita kutsutaan vain jos promiseketju heittää errorin
async function validator(req, res, next) {
  var currentdatestring = JSON.parse(req.body.currentdate);
  currentdateobj = new Date(currentdatestring);
  req.body.currentdate = currentdateobj;

  try {
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

module.exports = {validator, isNumValid};
