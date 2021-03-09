var server = require('../bin/www')

const chai = require('chai')
const expect = chai.expect

const validator = require('../middleware/validator')

//Testataan PUT requestia /users -routelle,
// käytä omaa expressin app-instanssia testipuolella PUT -pyynnön lähettämiseen?
// kokeillaan ensin ilman mitään lisä-instanssia, en usko että se on tarpeellinen
// Vak-palvelu käyttää samaa ideaa, käytetään serveriä ja tehdään ihan uusi express-instanssi testausta varten

//Nyt tarvitsisi luoda siis uusi express instanssi tai vain käyttää devausversiota,
// uuden express-instanssin luominen täällä testikansiossa vaatii rakennemuutosia,
// toimintalogiikkaa tarvitsee vielä setviä
describe("validator validate()", () => {
    it("should respond with status 200", function() {
        const response = chai.request(server).put("/users")
        response.should.have.status(200);
    })
})

describe("validator isNumValid()", () => {
	it("should return true for a number in between 10 and 70", ()=> {
		expect(validator.isNumValid(39)).to.be.true
	})
	it("should return false when the number is less 10", () => {
		expect(validator.isNumValid(9)).to.be.false
	})
	it("should return false when the number is equal to 10", () => {
		expect(validator.isNumValid(10)).to.be.false
	})
	it("should return false when the number is equal to 70", () => {
		expect(validator.isNumValid(70)).to.be.false
	})
	it("should return false when the number is greater than 70", () => {
		expect(validator.isNumValid(71)).to.be.false
	})
})