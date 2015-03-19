var electricSaw = require("./electricSaw");

function makeTable() {
	console.log("makeTable called");
    electricSaw.cut();
}

module.exports = {
	makeTable: makeTable
};