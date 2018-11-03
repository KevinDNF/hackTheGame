`use strict`

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d");

context.beginPath();
context.moveTo(0, 0);
context.lineTo(1280, 720);
context.stroke();
