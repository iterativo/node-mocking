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
        	carpenter.makeTable();
        	electricSaw.cut.calledOnce.should.be.true;
        });
    });
});