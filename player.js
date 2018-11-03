class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0.0;
        this.vy = 0.0;
        this.size = PLAYER_SIZE;
        this.target = null;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
/*
        if (this.target != null) {
            const pp = {
                x: this.x,
                y: this.y,
            }

            let dx = this.target.x - pp.x;
            let dy = this.target.y - pp.y;

            const len = Math.sqrt(dx * dx + dy * dy);
            dx /= len;
            dy /= len;

            this.vx = dx * PLAYER_SPEED / 2;
            this.vy = dy * PLAYER_SPEED / 2;

            this.x += this.vx;
            this.y += this.vy;

            if (len < 1) {
                this.target = null;
            }
        }*/

        

    }

    draw() {
        //drawCircle(this.x, this.y, PLAYER_SIZE / 2);
        drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
    }
}