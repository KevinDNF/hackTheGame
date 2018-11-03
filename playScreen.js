'use strict';

//The rectangle should have x,y,width,height properties
const playButtonRect = {
   x:GAME_WIDTH / 2 - 100,
   y:GAME_HEIGHT / 2 - 50,
   width:200,
   height:100
};

class PlayScreen {
    constructor() {
        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            const mousePos = getMousePos(canvas, evt);
        
            if (isInside(mousePos, playButtonRect)) {
                alert('clicked inside rect');
            }else{
                alert('clicked outside rect');
            }
        }, false);
        
    }

    update() {

    }

    redraw() {
        playButton(playButtonRect.x, playButtonRect.y, playButtonRect.width, playButtonRect.height, '#00FFFF', '#DE3163');
    }


}

function playButton(x, y, width, height, fillColor, lineColor) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = fillColor;
    //context.fillRect(25,72,32,32);
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = lineColor;
    context.stroke();
    context.closePath();
    context.font = '40pt Kremlin Pro Web';
    context.fillStyle = '#000000';
    context.fillText('Start', 345, 415);
}

