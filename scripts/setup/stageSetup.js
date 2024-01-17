//this file sets up your game (create the instances of your gameObjects)

//this has to be done always at first - for any game!
let gameManager = new GameManager();

// //now the actual setup for our actual game
let canvas = new Canvas("canvas");

let mountainNewspaper = new PrallaxObject('mountainNewspaper', 0, 0, 1000, 1000, './images/mountainNewspaper.png', 0.001);
let mountainPhotograph = new PrallaxObject('mountainPhotograph', 0, 0, 1000, 1000, './images/mountainPhotograph.png', 0.003);
let mountainStroke = new PrallaxObject('mountainStroke', 0, 20, 1000, 1000, './images/mountainStroke2.png', 0.01);
let mountainWave = new PrallaxObject('mountainWave', 0, -20, 1000, 1000, './images/mountainWave1.png', 0.05);
let mountainWave2 = new PrallaxObject('mountainWave2', 0, -20, 1000, 1000, './images/mountainWave2.png', 0.05);

let woodsBack = new PrallaxObject('woodsBack', 0, 0, 1000, 1000, './images/woods_back.png', 0.2);
let woodsFront = new PrallaxObject('woodsFront', 0, 0, 1000, 1000, './images/woods_front.png', 0.5);

let ground = new PrallaxObject('ground', 0, 535, 1000, 1000, './images/ground.png', 1);

// ground
let invisibleGround = new Ground('invisibleGround', 0, 535, 1000, 1000, './images/ground.png');
invisibleGround.setBoundaryOffsets(0, 0, 40, 0);

// spawning moving objects and obstacles 
let groundObjectSpawner = new GroundObjectSpawner('groundObjectSpawner');
let obstacleSpawner = new ObstacleSpawner('obstacleSpaner');

// player figure 
let player = new Player('player', 140, 300, 125, 125, './images/playerPerson125x125.png');
player.addAnimationInformation("running", 0, 7);
player.addAnimationInformation("crouching", 8, 15);
player.addAnimationInformation("jumping", 16, 23);
// player.addAnimationInformation("dead", 8, 15);
player.setCurrentAnimationByName("running");
player.setBoundaryOffsets(40, -40, 0, 0);

// frame for everything
let frame = new ImageObject('frame', 0, 0, 1000, 1000, './images/frame.png');

// text inside the canvas
let scoreText = new TextObject('scoreText', 100, 70, 100, 100, 'Score: 0', canvas.color.darkPurple, 'left', 30);
let highscoreText = new TextObject('highscoreText', canvas.canvasBoundaries.right - 100, 70, 100, 100, 'Highscore: 0', canvas.color.darkPurple, 'right', 30);
highscoreText.text = 'Highscore: ' + gameManager.highscore;

// sounds for the game
// let jumpSound = new SoundObject('jumpSound', '/sounds/jump.mp3', 0);
// let dodgeSound = new SoundObject('dodgeSound', '/sounds/dodge.mp3', 0);
let roarSound = new SoundObject('roarSound', './sounds/roar.mp3', 1400);
let runningSound = new SoundObject('runningSound', './sounds/runningSound.mp3', 3800);
let deathSound = new SoundObject('deathSound', './sounds/gameOver.mp3', 0);
// let fireplaceSound = new SoundObject('fireplaceSound', '/sounds/fireplaceSound.mp3', 3000);
let nightAmbienceSound = new SoundObject('nightAmbienceSound', './sounds/nightAmbienceSound.mp3', 0);










