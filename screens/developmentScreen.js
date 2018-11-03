'use strict';

/**
 * Screen for the Developement stage of the game
 * This is the main event
 */
class DevelopementScreen {
    constructor(){
        this.switchScreen = switchScreen;
        this.player = new Player(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        this.map = new Map(MAIN_MAP);
    }

    init(switchScreen) {
        window.addEventListener('keydown', function(event) {
            if (event.key == "w") {
                this.player.vy = -PLAYER_SPEED;
            }
            if (event.key == "a") {
                this.player.vx = -PLAYER_SPEED;
            }
            if (event.key == "s") {
                this.player.vy = PLAYER_SPEED;
            }
            if (event.key == "d") {
                this.player.vx = PLAYER_SPEED;
            }
        }.bind(this));

        window.addEventListener('keyup', function(event) {
            if (event.key == "w") {
                this.player.vy = 0;
            }
            if (event.key == "a") {
                this.player.vx = 0;
            }
            if (event.key == "s") {
                this.player.vy = 0;
            }
            if (event.key == "d") {
                this.player.vx = 0;
            }
        }.bind(this));
    }

    update() {
        this.map.collisions(this.player); 
        this.player.update();
    }

    redraw() {
        drawImage("map", 0, 0);
        this.player.draw();
        //drawGridOverlay();
    }
}
