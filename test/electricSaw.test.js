/*jshint -W030 */

var should = require("should"),
	sinon = require("sinon");

describe("The electric saw", function() {
	var electricSaw = require("./../src/electricSaw"),
		callback;

	beforeEach(function() {
		callback = sinon.spy();
	});

	it("should cut wood", function(done) {
		var wood = {};
		electricSaw.cut(wood, callback);
		callback.calledWithMatch(void 0, wood).should.be.true;
		wood.wasCut.should.be.true;
		done();
	});

	it("should error out when unable to cut wood", function(done){
		var wood = void 0;
		electricSaw.cut(wood, callback);
		callback.calledWithMatch("Kaboom").should.be.true;
		done();
	});
});