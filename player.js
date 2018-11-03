class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = PLAYER_SIZE;
    }

    draw() {
        drawCircle(this.x, this.y, PLAYER_SIZE);
    }
}
