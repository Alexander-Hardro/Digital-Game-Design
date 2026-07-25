"use strict";

var GRID_W = 32;
var GRID_H = 32;

// Balloon center
var BALLOON_X = 20;
var BALLOON_Y = 16;

// Balloon state
var balloonSize = 1;
var MAX_SIZE = 5
var popped = false;

// Pump Variables
var PUMP_X = 4;
var pumpY = 24;
var PUMP_UP_Y = 23;
var PUMP_DOWN_Y = 26;
var handleUp = true;


// --------------------------------------------------
PS.init = function () {
	PS.gridSize(GRID_W, GRID_H);
	PS.gridColor(PS.COLOR_GRAY);
	PS.statusColor(PS.COLOR_WHITE);
	PS.statusText("Pump the balloon by clicking the handle! ");

	PS.border(PS.ALL, PS.ALL, 0);

	drawPump();
	drawBalloon();
};

// --------------------------------------------------
function drawPump() {
	if (popped) return; // Do not draw pump if balloon is popped

	// Clear old pump area
	for (let x = 1; x <= 7; x++) {
		for (let y = 23; y <= 31; y++) {
			PS.color(x, y, PS.COLOR_WHITE);
			PS.data(x, y, 0);
		}
	}

	// Handle (moves up/down)
	for (let x = 1; x <= 7; x++) {
		PS.color(x, pumpY, PS.COLOR_BLACK);
		PS.data(x, pumpY, "pump");
	}

	// Vertical shaft
	for (let y = pumpY + 1; y <= 31; y++) {
		PS.color(PUMP_X, y, PS.COLOR_BLUE);
	}
}

function resetGrid() {
	for (let x = 0; x < GRID_W; x++) {
		for (let y = 0; y < GRID_H; y++) {
			PS.color(x, y, PS.COLOR_WHITE); // reset color
			PS.data(x, y, 0);               // clear stored data
		}
	}
}


// --------------------------------------------------
function drawBalloon() {
	if (popped) {
		// Clear entire screen when popped
		for (let x = 0; x < GRID_W; x++) {
			for (let y = 0; y < GRID_H; y++) {
				PS.color(x, y, PS.COLOR_WHITE);
			}
		}
		// Balloon center
		let balloonX = Math.floor(GRID_W / 2);
		let balloonY = Math.floor(GRID_H / 3);

		let balloonRadius = MAX_SIZE; // large size

		// Draw the string
		for (let y = balloonY + 1; y < GRID_H; y++) {
			PS.color(balloonX, y, PS.COLOR_GRAY);
		}

		// Draw the balloon body
		for (let x = 0; x < GRID_W; x++) {
			for (let y = 0; y < GRID_H; y++) {
				let dx = x - balloonX;
				let dy = y - balloonY;

				if (dx * dx + dy * dy <= balloonRadius * balloonRadius) {
					PS.color(x, y, PS.COLOR_RED);
				}
			}
		}

		return;
	}


	drawPump();

	// String
	for (let y = BALLOON_Y + 1; y <= 31; y++) {
		PS.color(BALLOON_X, y, PS.COLOR_BLUE);
	}

	let upScale = 1.4;    // balloon grows more upward
	let downScale = 0.6;  // grows less downward
	let sideScale = 0.9;  // slight horizontal squash

	for (let x = 0; x < GRID_W; x++) {
		for (let y = 0; y < GRID_H; y++) {
			let dx = (x - BALLOON_X) / sideScale;
			let dy = y - BALLOON_Y;

			if (dy < 0) {
				dy /= upScale;
			} else {
				dy /= downScale;
			}

			if ((dx * dx + dy * dy) <= balloonSize * balloonSize) {
				PS.color(x, y, PS.COLOR_RED);
			}
		}
	}
}




// --------------------------------------------------
PS.touch = function (x, y) {
	if (popped) {
		resetGame();
		return;
	}

	if (PS.data(x, y) === "pump") {
		// Move pump handle
		handleUp = !handleUp;
		pumpY = handleUp ? PUMP_UP_Y : PUMP_DOWN_Y;

		balloonSize += 1;
		PS.audioPlay("fx_swoosh");

		if (balloonSize >= MAX_SIZE) {
			popBalloon();
		} else {
			drawBalloon();
		}
	}
};

// --------------------------------------------------
function popBalloon() {
	popped = true;
	PS.statusText("Difficulty Increased! Click anywhere to reset.");
	PS.audioPlay("fx_tada");

	drawBalloon(); // clears the screen
}

// --------------------------------------------------
function resetGame() {
	// Reset balloon
	balloonSize = 1;
	MAX_SIZE = MAX_SIZE + 3;

	popped = false;

	// Reset pump
	handleUp = true;
	pumpY = PUMP_DOWN_Y;

	// Redraw everything
	resetGrid();
	drawPump();
	drawBalloon();

	PS.statusText("Pump the balloon by clicking the handle!");
}







