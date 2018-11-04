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
        //fail if hits 0
        this.satisfaction = 100;
        //goal 100
        this.food = 0;
        //goal 100
        this.coffee = 0;

        this.direction = 0; // degrees

        this.player_nothing = new Animation();
        this.player_nothing.addFrame("player1", 10);
        this.player_nothing.addFrame("player2", 10);

        this.animation = this.player_nothing;

        this.player_coffee = new Animation();
        this.player_coffee.addFrame("player-coffee-1", 10);
        this.player_coffee.addFrame("player-coffee-2", 10);

        this.player_food = new Animation();
        this.player_food.addFrame("player-donut-1", 10);
        this.player_food.addFrame("player-donut-2", 10);

        this.speech = new SpeechBubble(this);

    }

    /**
     * Update player based on current velocity
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;
        // console.log(this.x/20, this.y/20)
    }

    /**
     * Render the player
     */
    draw() {
        //drawCircle(this.x, this.y, PLAYER_SIZE / 2);

       // drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);

       switch (this.holding){
         case "nothing":
          this.animation = this.player_nothing;
          break;
         case "coffee":
           this.animation = this.player_coffee;
           break;
         case "food":
           this.animation = this.player_food;
           break;
       }

       this.animation.draw(
           this.x, this.y, 
           this.vx !== 0 || this.vy !== 0,
           this.direction);

        this.speech.draw();

    }
}
