'use strict';

/**
 * ============== CONSTANTS ==============
 */
const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

//Tile and player constants
const GRID_SIZE = 20;
const PLAYER_SIZE = GRID_SIZE *2;
const PLAYER_SPEED = 5;

//Screen IDs
const PLAY_SCREEN = 0;
const REGISTR_SCREEN = 1;
const PRESENT_SCREEN = 2;
const DEV_SCREEN = 3

/**
 * ============== CANVAS ==============
 */
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

/**
 * ============== HELPER FUNCTIONS ==============
 */
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
     context.lineJoin = "round"

     context.rect(x, y, width, height);
     context.fill();
     context.stroke();

     context.font = '40pt Kremlin Pro Web';
     context.fillStyle = '#000000';
     context.textAlign = 'center';
     context.textBaseline = 'middle';
     drawText(x + width / 2, y + height / 2, "Start");
}

//Retursn true if pos is inside of a rect
function isInside(pos, rect){
     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y;
}

function drawCircle(x, y, size){
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.beginPath();
    context.arc(x, y, size, 0, 2*Math.PI, false);
    context.fill();
    context.stroke();
}

function drawRect(x, y, w, h) {
    context.beginPath();
    context.fillRect(x, y, w, h);

}

function drawText(x, y, string) {
    context.beginPath();
    context.fillText(string, x, y);
}



function drawImage(name, x, y, rotation=0) {
    const image = document.getElementById(name);
    context.save();
    const midpointX = image.width/2;
    const midpointY = image.height/2;
    const radRotation = rotation*Math.PI/180;
    context.translate(x, y);
    context.rotate(radRotation);
    context.drawImage(image, -midpointX, -midpointY);
    context.restore();

    //context.fillStyle = "black";
    //context.fillRect(x,y,image.width,image.height);
}

function drawPlayer(name, x, y, rotation=0) {
    const image = document.getElementById(name);
    context.save();
    const midpointX = image.width/2;
    const midpointY = image.height/2;
    const radRotation = rotation*Math.PI/180;
    context.translate(x, y);
    context.rotate(radRotation);
    context.drawImage(image, -midpointX, -midpointY);
    context.restore();

    //context.fillStyle = "black";
    //context.fillRect(x,y,image.width,image.height);
}

function drawGridOverlay() {
    context.strokeStyle = "black";

    //
    for (let y = 0; y < 1080; y += 20) {
        context.beginPath();
        context.moveTo(0, y)
        context.lineTo(1960, y);
        context.stroke();
    }

    for (let x = 0; x < 1960; x += 20) {
        context.beginPath();
        context.moveTo(x, 0)
        context.lineTo(x, 1960);
        context.stroke();
    }
}
