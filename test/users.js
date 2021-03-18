
var chai = require("chai");
var chaiFiles = require('chai-files');
var chaiHttp = require('chai-http');
chai.should();
chai.use(chaiFiles);
var fs = require('fs');
var server = require('../src/www')
chai.use(chaiHttp);

var expect = require("chai").expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;

const requestBody = {
	"id": 11,
	"name": "optimal",
	"age": "3",
	"email": "kirov.ready@redarmy.ru",
	"website": "https://www.set.ru",
	"currentdate": "2000-10-21T09:24:50.346Z",
	"sentdate": ""
}
senttime = JSON.stringify(new Date());    
requestBody.sentdate = senttime;

describe("users vastaanotaPUT", async () => {

    it("File should exist", function () {
        expect(file('persontestdata.json')).to.not.be.empty;
    })

    it("File should contain current date with little variance", async function () { 
        //Aluksi lahetetaan requesti jonka toimesta serverilla oleva data, ja aika paivittyvät
        await chai.request(server).put("/users").send(requestBody);
        //haetaan tiedostossa oleva aika
        const testjson = JSON.parse(fs.readFileSync('persontestdata.json'));
        var filetime = testjson.sentdate;
        //katsotaan tasmaavatko tiedostossa oleva ja juuri otettava aika
        currenttime = JSON.stringify(new Date());
        expect(file('persontestdata.json')).to.contain('sentdate');
        expect(filetime).to.equal(currenttime);
    })

})