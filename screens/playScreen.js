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
        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            console.log("button clicked play screen");
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, this.playButtonRect)) {
                switchScreen(DEV_SCREEN);
            }
        }.bind(this));
    }

    update() {

    }

    redraw() {
        drawPlayButton(this.playButtonRect.x, this.playButtonRect.y, this.playButtonRect.width, this.playButtonRect.height, '#00FFFF', '#DE3163');
    }
}
