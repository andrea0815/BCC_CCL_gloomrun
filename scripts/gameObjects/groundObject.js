class GroundObject extends ImageObject {


    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
        
        this.grounded = true;
        this.dx = -1;
    }

    update() {
        this.position.x += this.dx * gameManager.gameSpeed;
        }}
