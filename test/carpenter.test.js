/*jshint -W030 */

var should = require("should"),
	sinon = require("sinon"),
	rewire = require("rewire");

describe("A carpenter", function() {
	var carpenter = rewire("./../src/carpenter"),
		electricSaw, table;

	describe("when using an electric saw", function() {
		beforeEach(function(){
			electricSaw = { cut: sinon.stub() };
			carpenter.__set__("electricSaw", electricSaw);
		});

		it("should be able to make a table", function() {
			table = carpenter.makeTable();

			electricSaw.cut.calledOnce.should.be.true;
			table.finished.should.be.true;
		});
		
		it("should not be able to make a table if there's problems with the wood", function() {
			electricSaw.cut.callsArg(0);

			var result = carpenter.makeTable();

			result.should.be.equal("No table for you!");
			electricSaw.cut.calledOnce.should.be.true;
		});
	});
});