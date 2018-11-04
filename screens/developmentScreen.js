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
        this.ui_items =  [
          ["Coffee",this.player.coffee,100],
          ["Food",this.player.food,100],
          ["Satisfaction",this.player.satisfaction,100]
        ]
        this.ui = new UI(this.ui_items)
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
    }

    update() {
        this.map.collisions(this.player); 
        this.player.update();
    }

    redraw() {
        drawImage("map", 0, 0);
        this.player.draw();
        this.ui.draw(this.ui_items);
        drawGridOverlay();
    }
}
