// this class creates the invisible Ground so the gravity works

class Ground extends ImageObject {

    constructor(name, x, y, width, height, src, gameSpeed) {
        super(name, x, y, width, height, src, gameSpeed);
    }
    
    onCollision(otherObject) {
        if (otherObject.name == "player") {
            otherObject.restorePosition();
        }
    }

    update() {}


    draw() {
        
    }
}