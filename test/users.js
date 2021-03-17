
var chai = require("chai");
var expect = require("chai").expect;
chai.should();

describe("users vastaanotaPUT", () => {

    currentttime = new Date();
    var filetime = ('../personaltestdata.json').currentttime;
    console.log(currentttime);

    it("File should exist", function () {
        expect (file('../personaltestdata.json')).to.not.be.empty;
        expect(file('../personaltestdata.json')).to.contain('sentdate');
        expect data.time.equals(currentttime)
    })

    it("File should contain current date vith little variance", function () {
        expect(file('../personaltestdata.json')).to.contain('sentdate');
        expect(file('../personaltestdata.json'))
    })

})