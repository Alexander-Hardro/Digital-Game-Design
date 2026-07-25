"use strict";

/* ======================
   CONSTANTS
====================== */

const GRID_W = 15;
const GRID_H = 15;
const CENTER = 7;

const AIM_RANGE = 8;
const AIM_SPEED = 1;
const MAX_ROUNDS = 3;

/* ======================
   GAME STATE
====================== */

let state;
let aimValue;
let aimDir;
let round;

let vError, hError;
let playerScore, aiScore;

let timer = null;

/* ======================
   SPRITES
====================== */

let targetSprite = null;
let crosshairSprite = null;

let targetX, targetY;

/* ======================
   LOAD FLAGS (CRITICAL)
====================== */

let targetLoaded = false;
let crosshairLoaded = false;

/* ======================
   UTIL
====================== */

function stopTimer() {
	if (timer !== null) {
		PS.timerStop(timer);
		timer = null;
	}
}

function updateScoreStatus(extra = "") {
	PS.statusText(
		`Round ${round} | Robin: ${playerScore}  Guy: ${aiScore}${extra}`
	);
}

function pauseOneSecond(callback) {
	stopTimer();
	state = "PAUSE";

	timer = PS.timerStart(60, () => {
		stopTimer();
		if (callback) callback();
	});
}

/* ======================
   INIT
====================== */

PS.init = function () {
	stopTimer();

	state = "LOADING";
	round = 1;
	playerScore = 0;
	aiScore = 0;

	targetLoaded = false;
	crosshairLoaded = false;

	PS.gridSize(GRID_W, GRID_H);
	PS.gridColor(PS.COLOR_GREEN);
	PS.border(PS.ALL, PS.ALL, 0);

	PS.statusText("Loading assets...");

	PS.imageLoad("target.png", onTargetLoad);
	PS.imageLoad("crosshair.png", onCrosshairLoad);
};

/* ======================
   SPRITE LOAD
====================== */

function onTargetLoad(img) {
	if (img === PS.ERROR) {
		PS.debug("Failed to load target.png\n");
		return;
	}

	targetSprite = PS.spriteImage(img);
	PS.spritePlane(targetSprite, 1);

	targetX = CENTER - Math.floor(img.width / 2);
	targetY = CENTER - Math.floor(img.height / 2);
	PS.spriteMove(targetSprite, targetX, targetY);

	targetLoaded = true;
	tryStartGame();
}

function onCrosshairLoad(img) {
	if (img === PS.ERROR) {
		PS.debug("Failed to load crosshair.png\n");
		return;
	}

	crosshairSprite = PS.spriteImage(img);
	PS.spritePlane(crosshairSprite, 2);
	PS.spriteShow(crosshairSprite, false);

	crosshairLoaded = true;
	tryStartGame();
}

/* ======================
   START WHEN READY
====================== */

function tryStartGame() {
	if (targetLoaded && crosshairLoaded) {
		startVerticalAim();
	}
}

/* ======================
   AIMING
====================== */

function startVerticalAim() {
	stopTimer();
	state = "VERTICAL";
	aimValue = -AIM_RANGE;
	aimDir = 1;

	timer = PS.timerStart(2, () => {
		aimValue += aimDir * AIM_SPEED;
		if (Math.abs(aimValue) >= AIM_RANGE) aimDir *= -1;

		PS.spriteShow(crosshairSprite, true);
		PS.spriteMove(crosshairSprite, CENTER - 1, CENTER + aimValue);
	});

	updateScoreStatus(" | Space to Shoot");
}

function startHorizontalAim() {
	stopTimer();
	state = "HORIZONTAL";
	aimValue = -AIM_RANGE;
	aimDir = 1;

	timer = PS.timerStart(2, () => {
		aimValue += aimDir * AIM_SPEED;
		if (Math.abs(aimValue) >= AIM_RANGE) aimDir *= -1;

		PS.spriteMove(crosshairSprite, CENTER + aimValue, CENTER - 1);
	});

	updateScoreStatus(" | Space to Aim");
}

/* ======================
   SCORING
====================== */

function resolvePlayerShot(v, h) {
	let dist = Math.abs(v) + Math.abs(h);
	let score = Math.max(0, 10 - dist);
	playerScore += score;

	updateScoreStatus(` | Robin scored ${score}`);
}

/* ======================
   AI TURN
====================== */

function aiTurn() {
	stopTimer();
	state = "AI";

	let aiV = PS.random(AIM_RANGE * 2) - AIM_RANGE;
	let aiH = PS.random(AIM_RANGE * 2) - AIM_RANGE;

	let dist = Math.abs(aiV) + Math.abs(aiH);
	let score = Math.max(0, 10 - dist);
	aiScore += score;

	updateScoreStatus(` | Guy scored ${score}`);
	PS.audioPlay("fx_silencer");

	pauseOneSecond(nextRound);
}

/* ======================
   ROUND FLOW
====================== */

function nextRound() {
	stopTimer();
	PS.spriteShow(crosshairSprite, false);

	if (round >= MAX_ROUNDS) {
		endGame();
		return;
	}

	round++;
	startVerticalAim();
}

/* ======================
   END GAME
====================== */

function endGame() {
	state = "END";

	let result = "DRAW";
	if (playerScore > aiScore){
		result = "Robin Wins!";
		PS.audioPlay("fx_tada");
	}
	else if (aiScore > playerScore){
		result = "Guy Wins!";
		PS.audioPlay("fx_rip");
	}

	PS.statusText(
		`${result} | Robin: ${playerScore}  Guy: ${aiScore} | R to Restart`
	);
}

/* ======================
   INPUT
====================== */

PS.keyDown = function (key) {

	if (key === 82 || key === 114) { // R
		PS.init();
		return;
	}

	if (state === "AI" || state === "END" || state === "PAUSE" || state === "LOADING") {
		return;
	}

	if (key === PS.KEY_SPACE) {
		if (state === "VERTICAL") {
			PS.audioPlay("fx_swoosh");
			stopTimer();
			vError = aimValue;
			startHorizontalAim();
		}
		else if (state === "HORIZONTAL") {
			PS.audioPlay("fx_silencer");
			stopTimer();
			hError = aimValue;
			resolvePlayerShot(vError, hError);
			pauseOneSecond(aiTurn);
		}
	}
};