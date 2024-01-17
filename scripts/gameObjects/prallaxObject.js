// this class is used for alle the background objects which move at different speeds

class PrallaxObject extends ImageObject {

    constructor(name, x, y, width, height, src, dx) {
        super(name, x, y, width, height, src);
        this.dx = -dx;    
        this.x2 = canvas.canvasHTMLElement.width;
    }

    update() {
        // movement to the left direction with the gameSpeed taken into account
        this.position.x += this.dx * gameManager.gameSpeed;
        if (this.position.x < - this.dimensions.width) this.position.x = 0;
    }

    draw() {
        if (this.isLoaded) {
            gameManager.canvas.drawLayer.drawImage(this.image, this.currentSourceX, this.currentSourceY, this.dimensions.width, this.dimensions.height, this.position.x, this.position.y, this.dimensions.height, this.dimensions.width);
            gameManager.canvas.drawLayer.drawImage(this.image, this.currentSourceX, this.currentSourceY, this.dimensions.width, this.dimensions.height, this.position.x + this.dimensions.width, this.position.y, this.dimensions.height, this.dimensions.width);
        }
    }
}