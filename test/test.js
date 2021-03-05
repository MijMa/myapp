var validator = require("../middleware/validator.js");

var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(2015).to.be.an.integer();
expect(2.015).not.to.be.an.integer();