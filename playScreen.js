'use strict';

//The rectangle should have x,y,width,height properties
const playButtonRect = {
   x: GAME_WIDTH / 2 - 100,
   y: GAME_HEIGHT / 2 - 50,
   width: 200,
   height: 100
};

class PlayScreen {
    constructor(test) {
        
        //Binding the click event on the canvas
        canvas.addEventListener('click', function(evt) {
            const mousePos = getMousePos(evt);

            if (isInside(mousePos, playButtonRect)) {
                alert('clicked in rect');
                test("test");
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
    context.fillStyle = lineColor;
    context.lineWidth = 2;
    context.strokeStyle = lineColor;

    context.beginPath();
    context.fillRect(x, y, width, height);
    context.fill();
    context.stroke();

    context.font = '40pt Kremlin Pro Web';
    context.fillStyle = '#000000';
    drawText(x + width / 2, y + height, "Start");
}
