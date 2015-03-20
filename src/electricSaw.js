function cut(errorCallback, wood){
	if (!wood){
		errorCallback("Kaboom");
	} else {
		// doing the cutting on wood
		wood.wasCut = true;
	}
	return wood;
}

module.exports = {
	cut: cut
};