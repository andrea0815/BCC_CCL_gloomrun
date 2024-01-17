// array of the obstacles

let oObj = [ // obstacle Objects
    
    {
        name: "'stone1'",
        src: "./images/obstacleStone1.png",

        dimensions: {
            width: 93,
            height: 93
        },

        boundaryOffset: {
            left: 20,
            right: -20,
            top: 20,
            bottom: 0,
        }         
    },

    {
        name: "stone2",
        src: "./images/obstacleStone2.png",

        dimensions: {
            width: 77,
            height: 68
        },

        boundaryOffset: {
            left: 20,
            right: -20,
            top: 20,
            bottom: 0,
        }         
    },

    {
        name: "trunk",
        src: "./images/obstacleTrunk.png",

        dimensions: {
            width:225,
            height: 93
        },

        boundaryOffset: {
            left: 60,
            right: -70,
            top: 40,
            bottom: 0,
        }         
    },

    {
        name: "stump",
        src: "./images/obstacleStump.png",

        dimensions: {
            width: 98,
            height: 81
        },

        boundaryOffset: {
            left: 20,
            right: -20,
            top: 20,
            bottom: 0,
        }         
    },

    {
        name: "tree",
        src: "./images/obstacleTree.png",

        dimensions: {
            width: 192,
            height: 357
        },

        boundaryOffset: {
            left: 70,
            right: -70,
            top: 0,
            bottom: -100,
        }         
    },

    {
        name: "bird",
        src: "./images/obstacleBird.png",

        dimensions: {
            width: 67,
            height: 152
        },

        boundaryOffset: {
            left: 20,
            right: -20,
            top: 0,
            bottom: -80,
        }         
    }

]