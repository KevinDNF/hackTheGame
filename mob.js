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
        this.queue_positions = ["16,30","18,30","20,30","20,30","22,30"];
        this.route = null;
        this.move_every = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        this.idle_amount = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
        this.idle_counter = 0;
        this.counter = 0;
        this.is_signed_up = false;
        this.idle_area_x = [8,15];
        this.idle_area_y = [15,21];
        this.timer = 0;
    }   

    /**
     * Update player based on current velocity
     */
    update() {
        if(this.task == null) {
            if(this.is_signed_up) {
                this.task = "idle";
                this.pos = [Math.floor(Math.random() * (35 - 10 + 1)) + 10, + Math.floor(Math.random() * (21 - 15 + 1)) + 15].toString();
                this.route = this.work_out_path(this.pos);

            } else {
                this.task = "queue";
                this.route = this.work_out_path(this.queue_positions[queue_count])
                queue_count +=1;
            }   
        } else if (this.task == "queue") {
            // Get next avalible position in the queue and navigate to there
            this.timer+=1;
            if(this.timer == 10000) {
                player.satisfaction -=1;
                this.timer = 0;
            }
            
        } else if (this.task == "drink") {
            //Navigate to drinks and remove 1 from global avalible_drinks

        } else if (this.task == "food") {
            // navigate to food table and take one from the table

        } else if(this.task == "idle") {
            // Program
            if(this.idle_counter == this.idle_amount) {
                this.pos = [Math.floor(Math.random() * (35 - 10 + 1)) + 10, + Math.floor(Math.random() * (21 - 15 + 1)) + 15].toString();
                this.route = this.work_out_path(this.pos);
                this.idle_counter = 0;
            }
            this.idle_counter +=1;

            
        } 

        if(this.route.length != 0 && this.counter == this.move_every) {
            //walk to target
            let move_to = this.route[0];
            this.x = move_to.y*20;
            this.y = move_to.x*20;
            this.route.shift()

            this.counter = 0;
        } else {
            this.task == null;
        }
        if(this.counter == this.move_every) {
            this.counter = 0
        }
        this.counter +=1;
        
    }

    /**
     * Render the mob
     */
    draw() {
        // drawCircle(this.x, this.y, PLAYER_SIZE / 2);
        drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
    }

    work_out_path(end_x_y) {
        let end_y = end_x_y.split(",")[0]
        let end_x = end_x_y.split(",")[1]

        let start = ai_map.grid[this.y/20][this.x/20];
        let end = ai_map.grid[end_x][end_y];
        let result = astar.search(ai_map,start,end);


        return result;
    }
    register_mob() {
        this.is_signed_up = true;
        this.task = null;
    }
}