'use strict';

class Animation {
    constructor() {
        this.frames = [];
        this.currentFrame = 0;
        this.frameCounter = 0;
    }

    addFrame(imageName, framesToNext) {
        this.frames.push({
            name: imageName,
            delay: framesToNext
        });
    }

    draw(x, y, changeFrames) {
        if (this.currentFrame === this.frames.length) {
            this.currentFrame = 0;
        }
        const frame = this.frames[this.currentFrame];
        drawImage(frame.name, x, y)
        if (changeFrames) {
            this.frameCounter += 1;
            if (this.frameCounter >= frame.delay) {
                this.frameCounter = 0;
                this.currentFrame += 1;
            }
        }
    }
}