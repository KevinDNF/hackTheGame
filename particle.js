"use strict";

class Particle {
    constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 100;
        this.y = y + (Math.random() - 0.5) * 100;
        this.vx = (Math.random() - 0.5) * 100;
        this.vy = (Math.random() - 0.5) * 64;

        const size = (100 - (this.vx + this.vy) / 2) / 5;
        //const rotation  = (Math.random() * 90) * Math.PI / 180;
        this.vertices = []
        this.vertices.push({x: 0,       y: 0});
        this.vertices.push({x: size,    y: 0});
        this.vertices.push({x: size,    y: size});
        this.vertices.push({x: 0,       y: size});
/*
        for (const v of this.vertices) {
            v.x = v.x * Math.cos(rotation) - v.y * Math.sin(rotation);
            v.y = v.x * Math.sin(rotation) + v.y * Math.cos(rotation);
        }
*/
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        this.vy += 1;
    }

    draw() {
        //drawCircle(this.x, this.y, 10);

        context.beginPath();
        context.moveTo(this.vertices[0].x + this.x, this.vertices[0].y + this.y);
        for (let i = 1; i < this.vertices.length; i++) {
            context.lineTo(this.vertices[i].x + this.x, this.vertices[i].y + this.y)
        }
        context.lineTo(this.vertices[0].x + this.x, this.vertices[0].y + this.y);
        context.fill();
        context.stroke();
    }
}