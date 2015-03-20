var should = require("should"),
	sinon = require("sinon"),
	rewire = require("rewire");

describe("A carpenter", function() {
	var carpenter = rewire("./../src/carpenter"),
		electricSaw = { cut: sinon.spy() };

    describe("when using an electric saw", function() {
    	before(function(){
    		carpenter.__set__("electricSaw", electricSaw);
    	});

        it("should be able to make a table", function() {
        	var table = carpenter.makeTable();

        	electricSaw.cut.calledOnce.should.be.true;
        	electricSaw.cut.calledWith({}).should.be.true;
        	table.finished.should.be.true;
        });
    });
});