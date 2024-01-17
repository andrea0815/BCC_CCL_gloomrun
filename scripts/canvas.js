class Canvas {
    
    canvasHTMLElement = null;
    drawLayer = null;
    canvasBoundaries = null;

    color = {
        'darkPurple': '#180f17',
        'lightGray': '#98989e',
        'lightGray2': '#8e8d92',
        'orange': '#f76851',
        'darkPurple': '#180f17',
        'purple1': '#736061',
        'purple2': '#604a4c',
        'purple3': '#4e3f3e',
        'purple4': '#352b34'
    }

    constructor(canvasId) {
        this.canvasHTMLElement = document.getElementById(canvasId);
        this.drawLayer = this.canvasHTMLElement.getContext("2d");
        this.canvasBoundaries = {
            bottom: this.canvasHTMLElement.height,
            right: this.canvasHTMLElement.width,
            left: 0,
            top: 0
        };

        gameManager.setCanvas(this);
    }
    
}