/*jshint -W030 */

var should = require("should"),
	sinon = require("sinon"),
	rewire = require("rewire");

describe("A carpenter", function() {
	var carpenter = rewire("./../src/carpenter"),
		electricSaw, callback;

	describe("when using an electric saw", function() {
		beforeEach(function() {
			callback = sinon.spy();
			electricSaw = {
				cut: sinon.stub()
			};
			carpenter.__set__("electricSaw", electricSaw);
		});

		it("should be able to make a table", function(done) {
			electricSaw.cut.callsArgWith(1, void 0, {
				cut: true
			});

			carpenter.makeTable(callback);

			callback.calledWith(void 0, sinon.match.has("finished", true)).should.be.true;
			done();
		});

		it("should not be able to make a table if the wood is not cut", function(done) {
			electricSaw.cut.callsArgWith(1, void 0, {
				cut: false
			});

			carpenter.makeTable(callback);

			electricSaw.cut.calledOnce.should.be.true;
			callback.calledWithMatch("No table for you!").should.be.true;
			done();
		});

		it("should not be able to make a table if there's problems with the wood", function(done) {
			electricSaw.cut.callsArg(1, void 0, void 0);

			carpenter.makeTable(callback);

			electricSaw.cut.calledOnce.should.be.true;
			callback.calledWithMatch("No table for you!").should.be.true;
			done();
		});
	});
});