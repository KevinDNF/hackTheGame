'use strict';

/**
 * Screen which has a big button that says "PLAY GAME"
 */
class PlayScreen {
    constructor(){
        this.playButtonRect = {
           x: GAME_WIDTH / 2 - 100,
           y: GAME_HEIGHT / 2 - 50,
           width: 200,
           height: 100
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

            if (isInside(mousePos, this.playButtonRect)) {
                switchScreen(REGISTR_SCREEN);
            }
        }.bind(this));
    }

    update() {

    }

    redraw() {
        drawPlayButton(this.playButtonRect.x, this.playButtonRect.y, this.playButtonRect.width, this.playButtonRect.height, '#00FFFF', '#DE3163');
    }
}
