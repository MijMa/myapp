var server = require('./server')

const chai = require('chai')
var chaiHttp = require('chai-http');
var expect  = require("chai").expect;
chai.should();

chai.use(chaiHttp);

const requestBody = {
	"id": 11,
	"name": "optimal",
	"age": "3",
	"email": "kirov.ready@redarmy.ru",
	"website": "https://www.set.ru",
	"currentdate": "\"2000-10-21T09:24:50.346Z\""
}

const requestBodyFail = {
	"name": "optimal",
	"age": "3",
	"email": "kirov.ready@redarmy.ru",
	"website": "https://www.set.ru",
	"currentdate": "\"2000-10-21T09:24:50.346Z\""
}

describe("validator validate()", () => {

    it("should respond with status 200, if 'id' data field is present", async function() {
		
		const response = await chai.request(server).put("/users").send(requestBody);
		expect(response.status).to.equal(200);
        //response.should.have.status(200);
    })

	it("should respond with status 400, if 'id' data field is missing", async function() {

		const response = await chai.request(server).put("/users").send(requestBodyFail);
		expect(requestBodyFail.id).to.not.exist;
		expect(response.status).to.equal(400);
    })
})
