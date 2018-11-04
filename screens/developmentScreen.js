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

        player = this.player;

        this.mob = new mob(GAME_WIDTH/2, GAME_HEIGHT/2)
        this.mob2 = new mob(GAME_WIDTH/2, GAME_HEIGHT/2)
        current_registering.push(this.mob)
        current_registering.push(this.mob2)
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
        this.mob.update();
        this.mob2.update();
    }

    redraw() {
        drawImage("map", 0, 0);
        this.player.draw();
        this.mob2.draw();
        this.mob.draw();
        drawGridOverlay();
    }
}
