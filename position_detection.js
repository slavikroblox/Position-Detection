var SETUP = function () {
	if (style.position.x > 350) {
		function SetPosition(x, y) {
			var x = x;
			var y = y;

			if (x > 0) {	
				style.position.x = x;
			}
			if (y > 0) {
				style.position.x = y;
			}
		}
		SetPosition(-350, -100)
	}
}

SETUP()