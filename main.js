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
    
    screen = new PlayScreen();
    window.requestAnimationFrame(loop);
}

function loop() {
    screen.update();
    screen.redraw();
    window.requestAnimationFrame(loop);
}


init();
