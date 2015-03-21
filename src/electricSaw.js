function cut(wood, callback){
	if (!wood){
		callback("Kaboom");
	} else {
		// doing the cutting on wood
		wood.wasCut = true;
		callback(void 0, wood);
	}
}

module.exports = {
	cut: cut
};