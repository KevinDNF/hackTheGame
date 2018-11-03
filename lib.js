'use strict';

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

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


function drawText(x, y, string) {
    context.closePath();
    context.beginPath();
    context.fillText(string, x, y);
}

function drawImage(name, x, y) {
    const image = document.getElementById(name);
    context.drawImage(image, x, y);
}