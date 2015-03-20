var electricSaw = require("./electricSaw");

function makeTable() {
	var table = {
		wood:{}
	};

    electricSaw.cut(table.wood);
    table.finished = true;
    return table;
}

module.exports = {
	makeTable: makeTable
};