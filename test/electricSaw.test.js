var should = require("should");

describe("The electric saw", function() {
	var electricSaw = require("./../src/electricSaw");

	it("should cut wood", function() {
		var wood = {};
		electricSaw.cut(wood);
		wood.wasCut.should.be.true;
	});
});