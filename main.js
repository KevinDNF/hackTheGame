'use strict';

let screen = null;
function switchScreen(switchTo) {
    function destroyAndSwitch(to) {
        //Remove event listeners by clearing the nodes and that
        const newCanvas = canvas.cloneNode(true);
        canvas.parentNode.replaceChild(newCanvas, canvas);

        //reinit
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");

        //Clear
        context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        to.init(switchScreen);
        screen = to;
    }

    if (switchTo === PLAY_SCREEN) {
        destroyAndSwitch(new PlayScreen());
    }

    if (switchTo === REGISTR_SCREEN) {
        destroyAndSwitch(new RegistrationScreen());
    }

    if (switchTo === PRESENT_SCREEN) {
        destroyAndSwitch(new PresentationScreen());
    }
}


function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    screen = new RegistrationScreen(switchScreen);
    screen.init(switchScreen);

    window.requestAnimationFrame(loop);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loop() {
    screen.update();
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    screen.redraw();
    window.requestAnimationFrame(loop);
    sleep(10);
}


init();
