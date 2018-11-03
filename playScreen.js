'use strict';

class PlayScreen {
    constructor(){
        this.playButton = {
           x: GAME_WIDTH / 2 - 100,
           y: GAME_HEIGHT / 2 - 50,
           width: 160,
           height: 80,
           fillStyle: '#DE3163'
        };
    }

    init(switchScreen) {

        canvas.addEventListener('mousedown', function(evt) {
            console.log("button mouse down play screen");
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, this.playButton)) {
                this.playButton.fillStyle = '#aE1133';
            }


        }.bind(this));

        canvas.addEventListener('mouseup', function(evt) {
            console.log("button mouse down play screen");
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, this.playButton)) {
                this.playButton.fillStyle = '#DE3163';
            }


        }.bind(this));

        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            console.log("button clicked play screen");
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, this.playButton)) {
                //switchScreen(REGISTR_SCREEN);
            }
        }.bind(this));
    }

    update() {

    }

    redraw() {
        drawPlayButton(
            this.playButton.x, this.playButton.y,
            this.playButton.width, this.playButton.height,
            this.playButton.fillStyle, this.playButton.strokeStyle);
    }
}
