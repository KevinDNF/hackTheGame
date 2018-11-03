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
        screen = to;
    }

    if (switchTo === PRESENT_SCREEN) {
        destroyAndSwitch(new PresentationScreen(switchScreen))
    }
}


function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(GAME_WIDTH, GAME_HEIGHT);
    context.stroke();
    
    screen = new PlayScreen(switchScreen);
    window.requestAnimationFrame(loop);
}

function loop() {
    screen.update();
    screen.redraw();
    console.log("LOOP");
    window.requestAnimationFrame(loop);
}


init();