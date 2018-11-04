class Player {
    /**
     * Constructs the player and inits their position   
     * @param {Nunber} x X position for the player to start at
     * @param {Number} y Y position for the player to start at
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0.0;
        this.vy = 0.0;
        this.size = PLAYER_SIZE;
        this.target = null;

        //coffee or food
        this.holding = "nothing";
        this.direction = 0;
    }

    /**
     * Update player based on current velocity
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    /**
     * Render the player
     */
    draw() {
        //drawCircle(this.x, this.y, PLAYER_SIZE / 2);
        //drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
        drawImage("player",this.x,this.y,this.direction)
    }
}
