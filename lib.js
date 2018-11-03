'use strict';

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

const PLAYER_SIZE = 40;
const PLAYER_SPEED = 5;


const PLAY_SCREEN = 0;
const REGISTR_SCREEN = 1;
const PRESENT_SCREEN = 2;


let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

//Function to get the mouse position
function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
 }

function drawPlayButton(x, y, width, height, fillColor) {
     context.fillStyle = fillColor;
     context.strokeStyle = fillColor;
     context.lineWidth = 65;
     context.lineJoin = "round";

     context.rect(x, y, width, height);
     context.fill();
     context.stroke();

     context.font = '40pt Kremlin Pro Web';
     context.fillStyle = '#000000';
     drawText(x + width / 2, y + height / 2, "PLAY");
}

function isInside(pos, rect){
     return pos.x > rect.x-35 && pos.x < rect.x+rect.width+35 && pos.y < rect.y+rect.height+35 && pos.y > rect.y-35;
}

function drawCircle(x, y, size){
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.beginPath();
    context.arc(x, y, size, 0, 2*Math.PI, false);
    context.fill();
    context.stroke();
}

function drawText(x, y, string) {
    context.textBaseline = 'middle';
    context.textAlign = "center";
    context.fillText(string, x, y);
}



function drawImage(name, x, y) {
    const image = document.getElementById(name);
    context.drawImage(image, x, y);
}
