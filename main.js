'use strict';

//Function to get the mouse position
function getMousePos(canvas, event) {
   var rect = canvas.getBoundingClientRect();
   return {
       x: event.clientX - rect.left,
       y: event.clientY - rect.top
   };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
   return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(GAME_WIDTH, GAME_HEIGHT);
    context.stroke();

    let currentScreen = new PlayScreen();
    loop(currentScreen);
}

function loop(screen) {

    screen.update();
    screen.redraw();

    window.requestAnimationFrame( loop );
}


init();
