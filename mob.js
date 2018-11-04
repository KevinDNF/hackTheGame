class mob {
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
        this.task = null; // Following possibilites are: queue, drink, food, idle
        this.queue_positions = ["8,15","9,15","10,15","11,15","12,15"];
    }

    /**
     * Update player based on current velocity
     */
    update() {
        if (this.task == "queue") {
            // Get next avalible position in the queue and navigate to there

        } else if (this.task == "drink") {
            //Navigate to drinks and remove 1 from global avalible_drinks

        } else if (this.task == "food") {
            // navigate to food table and take one from the table

        } else {
            // Program
            this.x  = 985;
            this.y = 600;
            console.log("Ai pos=",this.x, this.y)
            this.work_out_path();
        }
    }

    /**
     * Render the player
     */
    draw() {
        drawCircle(this.x, this.y, PLAYER_SIZE / 2);
        // drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
    }

    work_out_path() {
        var start = ai_map.grid[25][0];
        var end = ai_map.grid[25][5];
        var result = astar.search(ai_map,start,end);
        return result;
    }
}