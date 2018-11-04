'use strict';

class Particle {
    constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 100;
        this.y = y + (Math.random() - 0.5) * 100;
        this.vx = (Math.random() - 0.5) * 100;
        this.vy = (Math.random() - 0.5) * 64;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        this.vy += 1;
    }
}

/**
 * Screen which has a big button that says "PLAY GAME"
 */
class MainMenuScreen {
    constructor(){
        this.image = document.getElementById("logo");

        this.particles = [];

        const x = GAME_WIDTH / 2 - this.image.width / 2
        const y = GAME_HEIGHT / 2 - this.image.height / 2;

        this.state = "none";
        this.step = 0;

        this.playButton = {
           x: x,
           y: y,
           width: this.image.width,
           height: this.image.height,
           blur: 200
        };
    }

    init(switchScreen) {
        this.switchScreen = switchScreen;
        const image = document.getElementById("logo");
        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            if (this.state === "none") {
                console.log("button clicked play screen");
                const mousePos = getMousePos(evt);

                if (isInside(mousePos, this.playButton)) {
                    //switchScreen(DEV_SCREEN);
                    this.state = "fade";
                    for (let i = 0; i < 100; i++) {
                        this.particles.push(new Particle(
                            this.playButton.x + this.image.width / 2,
                            this.playButton.y + this.image.height / 2
                        ));
                    }
                }
            }
        }.bind(this));
    }

    update() {
        if (this.state === "fade") {
            this.playButton.y += 1;
            this.playButton.blur -= 50;
            this.step += 1;
            if (this.step === 20) {
                this.step = 0;
                this.state = "delay";
            }
        }
        else if (this.state === "delay") {
            this.step += 1;
            if (this.step === 25) {
                switchScreen(DEV_SCREEN);
            }
        }
    }

    redraw() {
        for (const particle of this.particles) {
            particle.update();
            context.fillStyle = "#FF1493";
            context.strokeStyle = "black";
            drawCircle(particle.x, particle.y, 10);
        }

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
