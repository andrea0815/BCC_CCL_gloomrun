class Player extends ImageObject {

    moveBy = {
	    "left": 0,
	    "top": 0
    };

    // current animation distinguishes between the different animation states
    currentAnimation = "";
    startJump = false;

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
        this.jumpForce = 10;
        this.jumpTimer = 0;
        this.dy = 0;
        this.originalHeight = height;
        this.grounded = false;
        this.columns = 8;
        this.rows = 3;
        }

    update() {
        this.checkWorldPostion();

        // J U M P 
        if (gameManager.keys['KeyW'] || gameManager.keys['Space'] || gameManager.keys['ArrowUp']) {
            // runningSound.audioTape.pause();   
            this.Jump();
            
        } else {
            this.jumpTimer = 0;
            // runningSound.audioTape.play();
        }

        // C R O U C H
        if (gameManager.keys['ShiftLeft'] || gameManager.keys['KeyS'] || gameManager.keys['ArrowDown']) {
            // this if is to set the crouching animation just once and not every iteration of the gameloop
            if (this.currentAnimation !== "crouch"){
                player.setCurrentAnimationByName("crouching");
            }
            // when the animation is set, the currentAnimation is set so the if-Statement above is false the next iteration
            this.currentAnimation = "crouch";
            player.setBoundaryOffsets(30, -30, 62, 0);

        } else {
            // when keys arent pressed anymore the animation is resetted to the running animation
            if(this.currentAnimation !== "running"){
                player.setCurrentAnimationByName("running");
            }
            this.currentAnimation = "running";
            player.setBoundaryOffsets(30, -30, 0, 0);
        }

        this.position.y += this.dy;

        // G R A V I T Y

        // this gravity works only at a specific height, when player is grounded
        if (this.position.y + this.dimensions.height < this.groundHeight) {
            this.dy += gameManager.gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.position.y = canvas.canvasHTMLElement.height - this.dimensions.height;
        }
    }

    // Jump Action
    Jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 24) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 24);
        }
    }
    
    checkWorldPostion() {
        if (this.boundaries.getBottomBoundary() <= gameManager.canvas.canvasBoundaries.top) {
            this.position.y = gameManager.canvas.canvasBoundaries.bottom;
        }
        else if (this.boundaries.getTopBoundary() >= gameManager.canvas.canvasBoundaries.bottom) {
            this.position.y = gameManager.canvas.canvasBoundaries.top - this.dimensions.height;
        }
        else if (this.boundaries.getRightBoundary() <= gameManager.canvas.canvasBoundaries.left) {
            this.position.x = gameManager.canvas.canvasBoundaries.right;
        }
        else if (this.boundaries.getLeftBoundary() >= gameManager.canvas.canvasBoundaries.right) {
            this.position.x = gameManager.canvas.canvasBoundaries.left - this.dimensions.width;
        }
    }

    onCollision(otherObject) {
    }   

    
}