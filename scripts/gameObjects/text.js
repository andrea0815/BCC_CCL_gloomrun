class TextObject extends GameObject {

    constructor(name, x, y, width, height, text, color, alignment, size) {
        super(name, x, y, width, height);
        this.text = text;
        this.alignment = alignment;
        this.color = color;
        this.size = size;
    }

    update() {
        gameManager.score++;        
        scoreText.text = 'Score: ' + Math.floor(gameManager.score / 10);
    }

    draw() { 
        gameManager.canvas.drawLayer.beginPath();
        gameManager.canvas.drawLayer.fillStyle = this.color;
        gameManager.canvas.drawLayer.font = this.size + 'px filmgoerdemo';
        gameManager.canvas.drawLayer.textAlign = this.alignment;
        gameManager.canvas.drawLayer.fillText(this.text, this.position.x, this.position.y);
        gameManager.canvas.drawLayer.closePath();
    }

}