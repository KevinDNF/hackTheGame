"use strict";

const SPEECH_STATE_NONE = 0;
const SPEECH_STATE_SPEAKING = 1;

class SpeechBubble {
    constructor(target) {
        this.target = target;

        this.text = "";
        this.state = 0;
        this.frameCount = 0;
        this.time = 0;
        this.size = 0;
    }

    speak(text) {
        if (this.state === SPEECH_STATE_NONE) {
            this.text = text;
            this.frameCount = 0;
            this.time = 50;
            this.state = SPEECH_STATE_SPEAKING;
            this.size = 0;
        }
    }

    draw() {
        if (this.state === SPEECH_STATE_SPEAKING) {
            if (this.frameCount > this.time) {
                this.state = SPEECH_STATE_NONE;
            }
            this.frameCount += 1;
            
            const x = this.target.x;
            const y = this.target.y;

            const left = x - this.text.length * 10;

            context.fillStyle = "white";
            context.strokeStyle = "black";
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - 10,  y - 10);
            context.lineTo(left,    y - 10);
            context.lineTo(left,    y - 80);
            context.lineTo(x - 10,  y - 80);
            context.lineTo(x, y);
            context.stroke();
            context.fill();

            context.font = '15px monospace';
            context.fillStyle = "black";
            drawText(left + 10, y - 50, this.text);
        }
    }
}