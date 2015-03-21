var electricSaw = require("./electricSaw"),
	table = {
		wood: {}
	};

function makeTable(callback) {
	electricSaw.cut(table.wood, function(err, wood) {
		if (!!err || !wood || !wood.cut) {
			callback("No table for you!");
		} else {
			table.finished = true;
			callback(void 0, table);
		}
	});
}

module.exports = {
	makeTable: makeTable
};