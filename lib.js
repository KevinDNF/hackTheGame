'use strict';

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
 }

