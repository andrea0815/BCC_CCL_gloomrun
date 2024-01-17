class GameManager {
	//properties
	gameObjects = [];
	canvas = null;
	previousTimeStamp;
	currentDeltaTime;
	score;
	highscore;

	player;
	obstacles = [];
	sounds = [];
	groundObjects = [];
	inititialGameSpeed = 3;
	gameSpeed = this.inititialGameSpeed;
	gravity = 1;
	keys = {};
	gameStatusTrue = true;
	muted = false;

	// for spawning Enemies
	initialSpawnTimer = 300;
	spawnTimer = this.initialSpawnTimer;

	// for spawning GroundObjects
	initialSpawnTimerDeko = 100;
	spawnTimerDeko = this.initialSpawnTimer;

	constructor() {
		window.gameManager = this;
		this.getScore();
	}

	// GAMELOOP

	gameLoop(timeStamp) {
		// let currentTimeStamp = performance.now();
		// gameManager.currentDeltaTime = currentTimeStamp - gameManager.previousTimeStamp;
		// gameManager.previousTimeStamp = currentTimeStamp;
		// console.log(gameManager.currentDeltaTime)
		gameManager.currentDeltaTime = timeStamp - gameManager.previousTimeStamp;
		gameManager.previousTimeStamp = timeStamp;
		// console.log(gameManager.currentDeltaTime)

		canvas.drawLayer.clearRect(0, 0, canvas.canvasHTMLElement.width, canvas.canvasHTMLElement.height);
		for (let gameLoopState = 0; gameLoopState < 3; gameLoopState++) {

			gameManager.gameObjects.forEach((gameObject) => {
				if (gameObject.isActive) {
					if (gameLoopState == 0) {
						gameObject.storePosition();
						gameObject.update();
					}
					if (gameLoopState == 1) {
						gameObject.currentGravityCollisionObject = null;
						gameManager.checkObjectsForCollisions(gameObject);
					}
					if (gameLoopState == 2) {
						gameObject.draw();
					}
				}
			});
		}

		gameManager.gameSpeed += 0.002;

		// Check if it is GAME COLLISION HAS HAPPENED and if so, GAME OVER
		if (!gameManager.gameStatusTrue) {
			gameManager.showEndScreen();
			return;
		}

		// mouseHelper.recentMouseEvent = 0;
		requestAnimationFrame(gameManager.gameLoop);
	}

	
	// OTHER MAIN FUNCTIONS FOR THE GAME

	checkObjectsForCollisions(object1) {
		for (let i = object1.gameObjectIndex + 1; i < gameManager.gameObjects.length; i++) {
			let object2 = gameManager.gameObjects[i];
			if (object2.isActive) {
				//normal collision after update
				let collisionDetected = this.detectCollision(object1, object2);
				if (collisionDetected) {
					object1.onCollision(object2);
					object2.onCollision(object1);
				}
			}
		}
	}

	detectCollision(object1, object2) {
		//overlap on x axis
		if (object1.boundaries.getLeftBoundary() <= object2.boundaries.getRightBoundary() &&
			object1.boundaries.getRightBoundary() >= object2.boundaries.getLeftBoundary()) {
			//overlap on y axis
			if (object1.boundaries.getTopBoundary() <= object2.boundaries.getBottomBoundary() &&
				object1.boundaries.getBottomBoundary() >= object2.boundaries.getTopBoundary()) {
				return true;
			}
		}
	}

	addGameObject(object) {
		this.gameObjects.push(object);
		object.gameObjectIndex = this.gameObjects.length - 1;
	}

	setCanvas(canvas) {
		this.canvas = canvas;
	}

	getScore() {
		this.score = 0;
		if (localStorage.getItem('highscore')) {
			this.highscore = Math.floor(localStorage.getItem('highscore'));
		} else {
			this.highscore = 0;
		}
	}

	showEndScreen() {
		// gameScreen.style.display = 'none';
		endScreen.style.display = 'flex';
		homeBtn.style.animation = 'AnimationSlideInTop 2s forwards';
    	rulesBtn.style.animation = 'AnimationSlideInTop 2s forwards';
    	soundBtn.style.animation = 'AnimationSlideInTop 2s forwards';
		runningSound.audioTape.pause();
	}

	setNewHighscore() {
		// set new highscore
		if (gameManager.score > gameManager.highscore) {
			gameManager.highscore = gameManager.score;
			highscoreText.text = 'Highscore: ' + Math.floor(gameManager.highscore / 10);
		}

		// save highscore in local storage
        window.localStorage.setItem('highscore', gameManager.highscore / 10);
	}
}

