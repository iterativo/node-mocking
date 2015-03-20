function cut(wood){
	// doing the cutting on wood
	wood.wasCut = true;
	return wood;
}

module.exports = {
	cut: cut
};