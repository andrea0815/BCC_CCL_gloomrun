class GroundObjectSpawner extends GameObject {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
    }

    update() {

        gameManager.spawnTimerDeko--;

        if (gameManager.spawnTimerDeko <= 0) {
            let pickedItem = this.RandomIntInRange(0, 7); // random element ob all groundObjects is selected
            this.SpawnDekoObject(pickedItem);
            
            // set random new spawning time with different chances
            if (Math.random() > 0.3) {
                gameManager.initialSpawnTimerDeko = this.RandomIntInRange(0, 30);
            } else {
                gameManager.initialSpawnTimerDeko = this.RandomIntInRange(200, 300);
            }
            
            gameManager.spawnTimerDeko = gameManager.initialSpawnTimerDeko - gameManager.gameSpeed * 8;

            if (gameManager.spawnTimerDeko < 70) {
                gameManager.spawnTimerDeko = 70;
            }
        }

        for (let i = 0; i < gameManager.groundObjects.length; i++) {
            let o = gameManager.groundObjects[i];

            if (o.position.x + o.dimensions.width < 0) {
                gameManager.groundObjects.splice(i, 1); // remove the object from the array
            }
        }
    }

    SpawnDekoObject(groundItem) {
        let groundObject = new GroundObject(dekoObj[groundItem].name, canvas.canvasHTMLElement.width + dekoObj[groundItem].dimensions.width, this.groundHeight - 5 - dekoObj[groundItem].dimensions.height, dekoObj[groundItem].dimensions.width, dekoObj[groundItem].dimensions.height, dekoObj[groundItem].src);
        gameManager.groundObjects.push(groundObject);
    }

    RandomIntInRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
