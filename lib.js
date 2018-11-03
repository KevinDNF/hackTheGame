'use strict';

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

const PLAYER_SIZE = 50;
const PLAYER_SPEED = 5;


const PLAY_SCREEN = 0;
const PRESENT_SCREEN = 1;


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

function drawCircle(x, y, size){
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.beginPath();
    context.arc(x, y, size, 0, 2*Math.PI, false);
    context.fill();
    context.stroke();
}

function drawText(x, y, string) {
    context.beginPath();
    context.fillText(string, x, y);
}



function drawImage(name, x, y) {
    const image = document.getElementById(name);
    context.drawImage(image, x, y);
}

