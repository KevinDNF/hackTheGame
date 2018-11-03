'use strict';

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

const Screens = {
    Play: 0,
    Present: 1,

}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

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