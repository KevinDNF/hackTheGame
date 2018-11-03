'use strict';


const GAME_HEIGHT = window.innerHeight;
const GAME_WIDTH = GAME_HEIGHT * (16.0 / 9.0); // adjust ratio

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");



function init(){
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(GAME_WIDTH, GAME_HEIGHT);
    context.stroke();
}

init();
