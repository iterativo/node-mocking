var electricSaw = require("./electricSaw"),
	table = {
		wood: {}
	},
	err = void 0;

function makeTable() {
    electricSaw.cut(electricSawErrorCallback, table.wood);
    
    if (err)
		return "No table for you!";

    table.finished = true;
    return table;
}

function electricSawErrorCallback(mssg){
	// handle error
	err = true;
}

module.exports = {
	makeTable: makeTable
};