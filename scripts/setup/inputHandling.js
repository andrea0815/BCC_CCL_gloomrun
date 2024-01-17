// this file contains all the functions for basic interactions, buttons, animations etc


// HTML BUTTONS AND OBJECTS

let startBtn = document.querySelector('#startButton');
let beginScreen = document.querySelector('#beginScreen');
let gameScreen = document.querySelector('#gameScreen');
let endScreen = document.getElementById('endScreen');
let startScreenAnimation = document.querySelector('#startScreenAnimation');
let BuiltUpAnimation = document.querySelector('#BuiltUpAnimation');
let fleeingAnimation = document.querySelector('#FleeingAnimation');
let grayRect = document.querySelector('#grayRect');
let body = document.querySelector('body');
let title = document.querySelector('.title');
let menuIcons = document.querySelector('.menuIcons');
let ruleScreen = document.querySelector('#ruleScreen');
let rulesBtnImg = document.querySelector('#rulesBtnImg');
let srcBtnImg = document.querySelector('#srcBtnImg');


// EVENT LISTENERS

document.addEventListener('keydown', function (e) {
    gameManager.keys[e.code] = true;
});

document.addEventListener('keyup', function (e) {
    gameManager.keys[e.code] = false;
});

startScreenAnimation.addEventListener("canplay", function () {
    setTimeout(function () {
        startScreenAnimation.play();
    }, 4000);
});

startBtn.addEventListener("click", function () {
    setTimeout(function () {
        fleeingAnimation.play();
        console.log('fleeing video is played');
    }, 4000);
});


// START FUNCTION

function startGame() {

    // animation and sounds when clicking start
    StartscreenSounds();
    startScreenAnimation.style.opacity = '0';
    BuiltUpAnimation.style.opacity = '0';
    fleeingAnimation.style.display = 'flex';
    startBtn.style.animation = 'AnimationSlideOutBottom 2s forwards';
    rulesBtn.style.animation = 'AnimationSlideOutBottom 2s forwards';
    soundBtn.style.animation = 'AnimationSlideOutBottom 2s forwards';
    fleeingAnimation.play();
    roarSound.playSound();
    runningSound.playSound();
    runningSound.audioTape.loop = true;
    runningSound.audioTape.volume = 0.1;
    title.style.animation = 'AnimationSlideOutBottom 2s 1s forwards';

    setTimeout(function () {
        // starting the fleeing video
        fleeingAnimation.style.animation = 'AnimationSlideOut 0.5s forwards';
        body.style.animation = 'changeBgColor 0.5s forwards';
        
        setTimeout(function () {
            // changing from the startscreen to the gamescreen with the canvas
            beginScreen.style.display = 'none';
            gameScreen.style.display = 'flex';

            // starts the gameloop 
            gameManager.gameStatusTrue = true;
            requestAnimationFrame(gameManager.gameLoop);
        }, 500);
    }, 7000);
}

// this functions is for resetting the game

function resetGame() {
    gameManager.obstacles.forEach((obstacle) => {
        // removing the active obstacles on the screen
        if (obstacle.isActive) {
            obstacle.isActive = false;
        }
    })

    // removing the gameOverScreen with animations 
    // hide gameOverScreen
    homeBtn.style.animation = 'AnimationSlideOutBottom 0.5s forwards';
    rulesBtn.style.animation = 'AnimationSlideOutBottom 0.5s forwards';
    soundBtn.style.animation = 'AnimationSlideOutBottom 0.5s forwards';
    endScreen.style.display = 'none';
    runningSound.audioTape.play();

    // removing obstacles from array and reset score 
    gameManager.obstacles = [];
    gameManager.score = 0;
    gameManager.spawnTimer = gameManager.initialSpawnTimer;
    gameManager.gameSpeed = gameManager.inititialGameSpeed;

    // start gameloop again
    gameManager.gameStatusTrue = true;
    requestAnimationFrame(gameManager.gameLoop);
}

// this function is for showing the controls of the game

let ruleScreenActive = false;

function showRuleScreen() {
    if (!ruleScreenActive) {
        ruleScreen.style.display = 'flex';
        ruleScreen.style.animation = 'AnimationSlideInRules 0.5s forwards';
        rulesBtnImg.src = './images/iconCross.png';
        ruleScreenActive = true;
    } else {
        ruleScreen.style.animation = 'AnimationSlideOutBottom 0.5s forwards';
        rulesBtnImg.src = './images/gameOverIconInfo.png';
        ruleScreenActive = false;
    }
}

function hideRuleScreen() {
    ruleScreen.style.animation = 'AnimationSlideOutBottom 0.5s forwards';
}

// this function is for setting the speed of the game in case a computer is too slow and the deltatime is too big

function changeGameSpeed() {
    // setting speed of the animation and the speed
    if (gameManager.inititialGameSpeed === 3) {
        gameManager.inititialGameSpeed = 6;
        player.animationDurationPerFrame = 4;
        srcBtnImg.src = "./images/iconSpeed2.png";
        console.log(gameManager.inititialGameSpeed);
        return;
    }
    if (gameManager.inititialGameSpeed === 6) {
        gameManager.inititialGameSpeed = 3;
        player.animationDurationPerFrame = 8;
        srcBtnImg.src = "./images/iconSpeed1.png";
        console.log(gameManager.inititialGameSpeed);
        return;
    }
}

function StartscreenSounds() {
    setTimeout(() => {
        // fireplaceSound.playSound();
        // fireplaceSound.audioTape.loop = true;
        // fireplaceSound.audioTape.volume = 0.1;
        nightAmbienceSound.playSound();
        nightAmbienceSound.audioTape.loop = true;
        nightAmbienceSound.audioTape.volume = 0.5;
    }, 0)
}

// StartscreenSounds();

