'use strict';


//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
   return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

let screen = null;
function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(GAME_WIDTH, GAME_HEIGHT);
    context.stroke();

<<<<<<< HEAD
    let currentScreen = new PlayScreen();
    loop(currentScreen);
    window.requestAnimationFrame( loop );
=======
    screen = new PlayScreen();
    window.requestAnimationFrame(loop);
>>>>>>> 592491c1d1c51547c451a8259d39dda74fc0a43a
}

function loop() {
    screen.update();
    screen.redraw();
    window.requestAnimationFrame(loop);
}


init();
