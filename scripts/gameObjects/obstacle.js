class Obstacle extends ImageObject {

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
        
        this.grounded = true;
        this.dx = -1;
    }

    update() {
        this.position.x += this.dx * gameManager.gameSpeed;
    }

    // if player collides with the obstacle, gameStatus and therefore the gameloop ist stopped
    onCollision(otherObject) {
        if (otherObject.name == "player") {
        deathSound.playSound();
        console.log(gameManager.highscore);
        console.log(gameManager.score);
        gameManager.setNewHighscore();
        gameManager.gameStatusTrue = false;
        }
    }

}