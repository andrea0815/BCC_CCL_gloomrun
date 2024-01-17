class ObstacleSpawner extends GameObject {

    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
    }

    update() {

        gameManager.spawnTimer--;

        if (gameManager.spawnTimer <= 0) {
            let pickedItem = this.RandomIntInRange(0, 5); // random element ob all obstacles is selected
            this.SpawnObstacle(pickedItem); // element is spawned
            gameManager.spawnTimer = gameManager.initialSpawnTimer - gameManager.gameSpeed * 8; // spawn timer decreases so the obstacles are spawned quicker

            // if spawntimer reaches a minimum is doesn't get lower cause otherwise game isnt playable anymore
            if (gameManager.spawnTimer < 70) {
                gameManager.spawnTimer = 70;
            }
        }

        for (let i = 0; i < gameManager.obstacles.length; i++) {
            let o = gameManager.obstacles[i];

            // removes the object from the array when it isnt is on the canvas anymore
            if (o.position.x + o.dimensions.width < 0) {
                gameManager.obstacles.splice(i, 1); 
            }
        }
    }


    SpawnObstacle(obstacleItem) {
        let obstacle = new Obstacle(oObj[obstacleItem].name, canvas.canvasHTMLElement.width + oObj[obstacleItem].dimensions.width, this.groundHeight - oObj[obstacleItem].dimensions.height, oObj[obstacleItem].dimensions.width, oObj[obstacleItem].dimensions.height, oObj[obstacleItem].src);
        obstacle.setBoundaryOffsets(oObj[obstacleItem].boundaryOffset.left, oObj[obstacleItem].boundaryOffset.right, oObj[obstacleItem].boundaryOffset.top, oObj[obstacleItem].boundaryOffset.bottom);
        // adds animation if bird is selected
        if (oObj[obstacleItem].name === "bird") {
            obstacle.addAnimationInformation("flying", 0, 5);
            obstacle.setCurrentAnimationByName("flying");
        }
        // adds obstacle to the array of obstacles
        gameManager.obstacles.push(obstacle);
    }

    RandomIntInRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

}