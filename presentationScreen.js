'use strict';

class PresentationScreen {
    constructor(switchScreen) {
        this.switchScreen = switchScreen;
        console.log("PRESENT SCREEN");
    }

    update() {
        
    }

    redraw() {
        drawImage("player", 0, 50);
        
    }
}
