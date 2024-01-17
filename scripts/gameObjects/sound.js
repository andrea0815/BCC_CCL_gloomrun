class SoundObject {

    constructor(name, src, delay) {
        this.name = name;
        this.src = src;
        this.delay = delay
        this.audioTape; 

        this.soundActive = true;
        gameManager.sounds.push(this);
    }

    playSound() {
        if (this.soundActive) {
            console.log('sound is played');
            this.audioTape = new Audio(this.src);
            setTimeout(() => { this.audioTape.play(); }, this.delay);
        }
    }

}