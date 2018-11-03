'use strict';

class RegistrationScreen {
    constructor(switchScreen) {
        this.map = new Map(MAIN_MAP);
        this.switchScreen = switchScreen;
        this.player = new Player(GAME_WIDTH / 2, GAME_HEIGHT / 2);
      
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
/*
        window.addEventListener("click", function(event) {
            const mp = getMousePos(event);
            this.player.target = {
                x: mp.x,
                y: mp.y
            }
        }.bind(this));*/

        //alert("RegistrationScreen yeye");
    }

    update() {
        this.map.collisions(this.player); 
        this.player.update();

       
    }

    redraw() {
        drawImage("map", 0, 0);
        this.player.draw();
        drawGridOverlay();
    }
}
