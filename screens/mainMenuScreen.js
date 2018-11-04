'use strict';

/**
 * Screen which has a big button that says "PLAY GAME"
 */
class MainMenuScreen {
    constructor(){
        const image = document.getElementById("logo");

        const x = GAME_WIDTH / 2 - image.width / 2
        const y = GAME_HEIGHT / 2 - image.height / 2;

        this.state = "none";

        this.playButton = {
           x: x,
           y: y,
           width: image.width,
           height: image.height,
           blur: 500
        };
    }

    init(switchScreen) {
        this.switchScreen = switchScreen;
        const image = document.getElementById("logo");
        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            console.log("button clicked play screen");
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, this.playButton)) {
                //switchScreen(DEV_SCREEN);
                this.state = "fade";
            }
        }.bind(this));
    }

    update() {
        if (this.state === "fade") {
            this.playButton.blur -= 10;
            if (this.playButton.blur < 20) {
                switchScreen(DEV_SCREEN);
            }
        }
    }

    redraw() {
        context.shadowBlur = this.playButton.blur;
        context.shadowColor = "#FF69B4";
        //console.log(this.playButton.blur);
        drawImage(
            "logo", 
            this.playButton.x, 
            this.playButton.y
        );
    }
}
