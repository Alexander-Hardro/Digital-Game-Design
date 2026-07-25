"use strict";

/* ======================
   GAME DATA
====================== */

let puzzles = [
	{
		answer: "DOLLARTREE",
		draw: function () {
			drawDollar(2, 4);
			drawPlus(14, 8, 5);
			drawTree(20, 4);
		}
	},
	{
		answer: "IPHONE",
		draw: function () {
			drawEye(2, 4);
			drawPlus(14, 8, 5);
			drawPhone(20, 4);
		}
	},
	{
		answer: "BERRY",
		draw: function () {
			drawStrawberry(2, 4);
			drawMinus(14, 8, 5);
			drawStraw(20, 4);
		}
	},
	{
		answer: "BOAT",
		draw: function () {
			drawRainbow(2, 8);
			drawMinus(8, 8, 5);
			drawRain(14, 8);
			drawPlus(20,8,5);
			drawT(26,8);
		}
	}
];

let currentPuzzle = 0;
let guess = "";

// Level control
let levelTimer = null;
let gameComplete = false;

/* ======================
   INIT
====================== */

PS.init = function () {
	PS.gridSize(36, 18);
	PS.gridColor(0xD2DB44);
	PS.border(PS.ALL, PS.ALL, 0);
	loadPuzzle();
};

/* ======================
   GRID CLEAR
====================== */

function clearGrid(color) {
	PS.color(PS.ALL, PS.ALL, color);
	PS.glyph(PS.ALL, PS.ALL, "");
}

/* ======================
   PUZZLE CONTROL
====================== */

function loadPuzzle() {
	clearGrid(PS.COLOR_WHITE);
	guess = "";
	gameComplete = false;

	PS.statusText(
		"Level " + (currentPuzzle + 1) + " of " + puzzles.length +
		" — Type answer, then press ENTER"
	);

	puzzles[currentPuzzle].draw();
}

function advanceLevel() {
	PS.timerStop(levelTimer);
	levelTimer = null;

	currentPuzzle++;
	loadPuzzle();
}

function endGame() {
	gameComplete = true;
	clearGrid(PS.COLOR_WHITE);

	PS.statusText("YOU BEAT THE FINAL LEVEL, CONGRATS!");
	PS.audioPlay("fx_tada");
}

/* ======================
   INPUT
====================== */

PS.keyDown = function (key) {

	if (gameComplete) {
		return;
	}

	if (key >= 97 && key <= 122) {
		guess += String.fromCharCode(key).toUpperCase();
		PS.statusText(guess);
		PS.audioPlay("fx_click");
	}

	if (key === PS.KEY_BACKSPACE && guess.length > 0) {
		guess = guess.slice(0, -1);
		PS.statusText(guess);
	}

	if (key === PS.KEY_ENTER) {
		checkAnswer();
	}
};

function checkAnswer() {

	if (guess !== puzzles[currentPuzzle].answer) {
		PS.statusText("Try again");
		PS.audioPlay("fx_blast1");
		guess = "";
		return;
	}

	// Correct answer
	PS.audioPlay("fx_tada");

	// LAST LEVEL?
	if (currentPuzzle === puzzles.length - 1) {
		endGame();
		return;
	}

	PS.statusText("Correct! Next level...");
	levelTimer = PS.timerStart(60, advanceLevel);
}

/* ======================
   GENERIC 10x10 DRAWER
====================== */

function drawSprite(sprite, palette, x, y) {
	for (let r = 0; r < 10; r++) {
		for (let c = 0; c < 10; c++) {
			PS.color(x + c, y + r, palette[sprite[r][c]]);
		}
	}
}
function drawSpriteSmall(sprite, palette, x, y) {
	for (let r = 0; r < 5; r++) {
		for (let c = 0; c < 5; c++) {
			PS.color(x + c, y + r, palette[sprite[r][c]]);
		}
	}
}


/* ======================
   10x10 SPRITES
====================== */

// 🌳 Tree
function drawTree(x, y) {
	let Tree = [
		[0,0,0,0,2,2,0,0,0,0],
		[0,0,0,2,2,2,2,0,0,0],
		[0,0,2,2,2,2,2,2,0,0],
		[0,2,2,2,2,2,2,2,2,0],
		[2,2,2,2,2,2,2,2,2,2],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,0,1,1,0,0,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		0xB36815,
		0x38B00B
	];

	drawSprite(Tree, colors, x, y);
}

// 💵 Dollar
function drawDollar(x, y) {
	let Dollar = [
		[0,0,0,1,0,0,1,0,0,0],
		[0,0,1,1,1,1,1,1,1,0],
		[0,1,0,1,0,0,1,0,0,0],
		[0,1,0,1,0,0,1,0,0,0],
		[0,1,0,1,0,0,1,0,0,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,0,0,1,0,0,1,0,1,0],
		[0,0,0,1,0,0,1,0,1,0],
		[0,1,1,1,1,1,1,1,0,0],
		[0,0,0,1,0,0,1,0,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_GREEN
	];

	drawSprite(Dollar, colors, x, y);
}

// Eye
function drawEye(x, y) {
	let Eye = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,1,1,1,1,0,0,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,1,0,2,2,2,2,0,1,0],
		[1,0,0,2,2,0,2,0,0,1],
		[1,0,0,2,2,2,2,0,0,1],
		[0,1,0,2,2,2,2,0,1,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,0,0,1,1,1,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_BLACK,
		PS.COLOR_BLUE
	];

	drawSprite(Eye, colors, x, y);
}

// Phone
function drawPhone(x, y) {
	let Phone = [
		[0,0,0,0,0,0,0,1,0,0],
		[0,0,0,0,0,0,0,1,0,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,0,1,2,2,2,2,1,0,0],
		[0,0,1,2,2,2,2,1,0,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,0,1,3,0,3,0,1,0,0],
		[0,0,1,0,3,0,3,1,0,0],
		[0,0,1,3,0,3,0,1,0,0],
		[0,0,1,1,1,1,1,1,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_BLACK,
		PS.COLOR_BLUE,
		PS.COLOR_GRAY
	];

	drawSprite(Phone, colors, x, y);
}

function drawStrawberry(x, y) {
	let Strawberry = [
		[0,0,1,1,0,1,0,0,1,0],
		[0,0,0,1,1,1,1,1,1,0],
		[0,0,0,0,1,1,1,0,0,0],
		[0,0,3,3,3,3,3,2,3,0],
		[0,0,0,3,3,2,3,3,0,0],
		[0,0,0,2,3,3,3,3,0,0],
		[0,0,0,3,2,3,3,3,0,0],
		[0,0,0,0,3,2,3,0,0,0],
		[0,0,0,0,0,3,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_GREEN,
		PS.COLOR_YELLOW,
		PS.COLOR_RED
	];

	drawSprite(Strawberry, colors, x, y);
}

function drawStraw(x, y) {
	let Straw = [
		[0,0,1,1,1,1,1,1,1,1],
		[0,1,2,0,2,0,2,0,0,1],
		[0,1,2,0,2,0,2,0,0,1],
		[0,0,1,1,1,1,1,2,2,1],
		[0,0,0,0,0,0,1,0,0,1],
		[0,0,0,0,0,0,1,2,2,1],
		[0,0,0,0,0,0,1,0,0,1],
		[0,0,0,0,0,0,1,2,2,1],
		[0,0,0,0,0,0,1,0,0,1],
		[0,0,0,0,0,0,1,1,1,1]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_BLACK,
		PS.COLOR_RED
	];

	drawSprite(Straw, colors, x, y);
}

function drawRain(x, y) {
	let Rain = [
		[0,2,2,2,0],
		[2,2,2,2,2],
		[0,0,3,0,0],
		[3,0,0,0,3],
		[0,3,0,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_BLACK,
		PS.COLOR_GRAY,
		PS.COLOR_BLUE
	];

	drawSpriteSmall(Rain, colors, x, y);
}

function drawRainbow(x, y) {
	let Rainbow = [
		[2,2,3,4,5],
		[2,3,4,5,6],
		[3,4,5,6,7],
		[4,5,6,7,8],
		[5,6,7,8,8]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_BLACK,
		PS.COLOR_RED,
		PS.COLOR_ORANGE,
		PS.COLOR_YELLOW,
		PS.COLOR_GREEN,
		PS.COLOR_BLUE,
		PS.COLOR_INDIGO,
		PS.COLOR_VIOLET,
	];

	drawSpriteSmall(Rainbow, colors, x, y);
}

function drawT(x, y) {
	let T = [
		[1,1,1,1,1],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0]
	];

	let colors = [
		PS.COLOR_WHITE,
		PS.COLOR_GRAY
	];

	drawSpriteSmall(T, colors, x, y);
}

/* ======================
   PLUS SIGN
====================== */

function drawPlus(x, y, size) {
	let mid = Math.floor(size / 2);

	for (let i = 0; i < size; i++) {
		PS.color(x + mid, y + i, PS.COLOR_BLACK);
		PS.color(x + i, y + mid, PS.COLOR_BLACK);
	}
}

function drawMinus(x, y, size) {
	let mid = Math.floor(size / 2);

	for (let i = 0; i < size; i++) {
		PS.color(x + i, y + mid, PS.COLOR_BLACK);
	}
}

