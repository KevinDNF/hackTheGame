'use strict';

class RegistrationScreen {
    constructor(switchScreen) {
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

        //alert("RegistrationScreen yeye");
    }

    update() {
        const playerNextX = this.player.x + this.player.vx;
        const playerNextY = this.player.y + this.player.vy;
        let gridX = Math.floor(playerNextX / GRID_SIZE);
        let gridY = Math.floor(playerNextY / GRID_SIZE);
        if (this.player.vx > 0) {
            gridX += 1;
        }
        if (this.player.vy > 0) {
            gridY += 1;
        }
        const tile = MAIN_MAP[gridY][gridX];

       // console.log(tile);
        if (tile === "x") {
            this.player.vx = 0;
            this.player.vy = 0;
        }

       // console.log(MAIN_MAP[y][x]);
        //if ()





        this.player.update();

       // const x = Math.floor(this.player.x / 40);
     //   const y = Math.floor(this.player.y / 40);

       // console.log(`Player Grid X: ${x}, Player Grid Y: ${y}`)

      //  console.log(MAIN_MAP[y][x]);
    }

    redraw() {
        drawImage("map", 0, 0);
        this.player.draw();

        
        context.strokeStyle = "black";

        //
        for (let y = 0; y < 1080; y += 40) {
            context.beginPath();
            context.moveTo(0, y)
            context.lineTo(1960, y);
            context.stroke();
        }

        for (let x = 0; x < 1960; x += 40) {
            context.beginPath();
            context.moveTo(x, 0)
            context.lineTo(x, 1960);
            context.stroke();
        }
    }
}
