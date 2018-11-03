'use strict';
/**
 * A screen is a polymorphic object
 * It refers to the current state of the game
 * Each screen has an update and redraw function
 */
let screen = null;

/**
 * Allows the screens to switch between eachother
 * Passes in a number (these are in lib.js)
 * This will then reset the screen object to the new screen
 * @param {function} switchTo This function
 */
function switchScreen(switchTo) {
    //Removes event listens and then resets the screen
    function destroyAndSwitch(to) {
        //Remove event listeners by clearing the nodes and that
        const newCanvas = canvas.cloneNode(true);
        canvas.parentNode.replaceChild(newCanvas, canvas);

        //reinit
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");

        //Clear
        context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        //And reset
        to.init(switchScreen);
        screen = to;
    }

    if (switchTo === PLAY_SCREEN) {
        destroyAndSwitch(new PlayScreen());
    }
    else if (switchTo === REGISTR_SCREEN) {
        destroyAndSwitch(new RegistrationScreen());
    }
    else if (switchTo === PRESENT_SCREEN) {
        destroyAndSwitch(new PresentationScreen());
    }
    else if (switchTo === DEV_SCREEN) {
        destroyAndSwitch(new DevelopementScreen());
    }
}

/**
 * Main entry point of the program
 */
function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    //Init the first screen
    screen = new RegistrationScreen(switchScreen);
    screen.init(switchScreen);

    //Begin the main loop
    window.requestAnimationFrame(loop);
}

/**
 * Sleeps the thread so it doesn't run too fast
 * @param ms Milliseconds to sleep for
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * MAIN GAME LOOP
 * Loops throughout the game
 * INPUT -> CLEAR -> DRAW -> REPEAT
 * A screen refers to the current stage of the game
 *  EG: Main menu, presentation, or dev stage
 */
function loop() {
    screen.update();
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    screen.redraw();
    window.requestAnimationFrame(loop);
    sleep(10);
}


init();
