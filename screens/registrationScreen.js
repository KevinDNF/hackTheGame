'use strict';

/**
 * Screen for the registration stage of the game
 */
class RegistrationScreen {

    constructor(){
        this.switchScreen = switchScreen;
        this.player = new Player(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        this.map = new Map(MAIN_MAP);
    }

    init(switchScreen) {
        let map = {}; // You could also use an array
        let onkeydown = function(e){
            map[e.keyCode] = e.type == 'keydown';
            // Up and down
            if (map[W_KEY]) {
                this.player.vy = -PLAYER_SPEED;
                this.player.direction = 270;
            } else if (map[S_KEY]) {
                this.player.vy = PLAYER_SPEED;
                this.player.direction = 90;
            } else this.player.vy = 0;
            // Right and left
            if (map[A_KEY]) {
                this.player.vx = -PLAYER_SPEED;
                this.player.direction = 180;
            } else if (map[D_KEY]) {
                this.player.vx = PLAYER_SPEED;
                this.player.direction = 0;
            } else this.player.vx = 0;
            // Rotations
            if (map[W_KEY] && map[D_KEY]) {
                this.player.direction = 315;
            }
            if (map[S_KEY] && map[D_KEY]) {
                this.player.direction = 45;
            }
            if (map[A_KEY] && map[S_KEY]) {
                this.player.direction = 135;
            }
            if (map[W_KEY] && map[A_KEY]) {
                this.player.direction = 225;
            }
        }.bind(this);
        let onkeyup = onkeydown;

        window.addEventListener('keydown', onkeydown);

        window.addEventListener('keyup', onkeyup);
/*
        window.addEventListener("click", function(event) {
            const mp = getMousePos(event);
            this.player.target = {
                x: mp.x,
                y: mp.y
            }
        }.bind(this));*/

        //Binding the click event on the canvas
        // canvas.addEventListener('click', function(evt) {
        //     console.log("button clicked");
        //     const mousePos = getMousePos(evt);
        //
        //     if (isInside(mousePos, this.playButtonRect)) {
        //         switchScreen(PRESENT_SCREEN);
        //     }
        // }.bind(this));
    }

    update() {
        this.map.collisions(this.player);
        this.player.update();
    }

    redraw() {
        drawImage("map", 0, 0);

        //drawPlayButton(this.playButtonRect.x, this.playButtonRect.y, this.playButtonRect.width, this.playButtonRect.height, '#00FFFF', '#DE3163');

        this.player.draw();
        drawGridOverlay();
    }
}
