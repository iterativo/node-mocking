/*jshint -W030 */

var should = require("should"),
	sinon = require("sinon");

describe("The electric saw", function() {
	var electricSaw = require("./../src/electricSaw"),
		errorCallback;

	beforeEach(function() {
		errorCallback = sinon.spy();
	});

	it("should cut wood", function() {
		var wood = {};
		electricSaw.cut(errorCallback, wood);
		errorCallback.called.should.be.false;
		wood.wasCut.should.be.true;
	});

	it("should error out when unable to cut wood", function(){
		var wood = void 0;
		electricSaw.cut(errorCallback, wood);
		errorCallback.calledWith("Kaboom").should.be.true;
	});
});