function checkJanken(a, b) {
	var c = (a - b + 3) % 3;
	if (c == 0) {
		return "DRAW";
	} else if (c == 2) {
		return "WIN";
	} else {
		return "LOSE";
	}
}
