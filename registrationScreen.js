'use strict';

class RegistrationScreen {
    constructor() {
        window.addEventListener('keydown', function(event) {
            const keyName = event.key;
            console.log('keydown event\n\n' + 'key: ' + keyName);
        });

        this.player = new Player(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        //alert("RegistrationScreen yeye");
    }

    update() {

    }

    redraw() {
        this.player.draw();
    }
}
