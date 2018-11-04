
/**
 * Data structure for the map itself
 * Handles getting a tile as well as collision detection
 */
class Map {
    constructor(layout) {
        this.layout = layout;
        this.register = null;
    }

  /**
   * Gets a tile at X, Y
   * @param {Number} x The X coordinate of a tile to get
   * @param {Number} y The Y coordinate of a tile to get
   */
  getTile(x, y) {
      return this.layout[y][x]
  }

  specialTiles(nextMove, player) {
    switch(nextMove){
      case "c":
        //c = coffee stand
        player.speech.speak("I am at a coffee stand.");
        if(player.holding === "coffee") {
          if(player.coffee >= 100){
            console.log("FULL EAT IT, at the bar")
          } else{ 
            player.holding="nothing"
            player.coffee += 10
          }
        }
        break;
      case "f":
        //f = food stand
        player.speech.speak("I am at a food stand.");
        if (player.holding === "food"){
          if(player.food >= 100){
            console.log("FULL, EAT IT")
          }else{
            player.holding = "nothing"
            player.food += 10
          }
        }
        break;
      case "r":
        //r = registration

        if (player.holding !== "nothing"){
          player.speech.speak("My hands are busy");
        }else{

          if(current_registering.length != 0) {
            this.register = current_registering[0];
            this.register.register_mob()
            current_registering.shift()
          } else {

          }
          player.speech.speak("I am now registering people")
        }
        break;
      case "r":
        //r = registration
        if (player.holding !== "nothing"){
          player.speech.speak("My hands are busy");
        }else{
          player.speech.speak("I am now registering people")
        }
        break;
      case "h":
        //h = harbord coffee
        player.speech.speak("I already am holding something!")
        if(player.holding === "nothing"){
          player.holding = "coffee"
          player.speech.speak("I have collected 5 coffees");
        } else {
          player.speech.speak("I already am holding something!");
        }
        break;
      case "s":
        //s = food Shop
        if(player.holding === "nothing"){
          player.holding = "food";
          player.speech.speak("I have collected 5 food items");
        } else {
          player.speech.speak("I already am holding something!");
        }
        break;
      case "z":
        //z = food seats
        if(player.holding === "food" || player.holding === "coffee"){
          player.holding = "nothing";
          player.speech.speak("Nom nom nom...");
        }
        break;
    }
  }

    /**
     * Handles collision detection and response between the tile map
     * and the player
     * @param {Player} player The player
     */
    collisions(player) {
        const image = document.getElementById("player");
        const playerWidth = image.width;
        const playerHeight = image.height;
        const playerNextX = player.x + player.vx;
        const playerNextY = player.y + player.vy;
        let gridX = Math.floor(playerNextX / GRID_SIZE);
        let gridY = Math.floor(playerNextY / GRID_SIZE);

        if (player.vx > 0) {
            gridX += 1;
        }
        if (player.vy > 0) {
            gridY += 2;
        }
        const tile = this.getTile(gridX, gridY);
        const tileYRIGHT = this.getTile(Math.floor(player.x / GRID_SIZE) + 1, gridY);
        const tileY = this.getTile(Math.floor(player.x / GRID_SIZE), gridY);
        const tileYLEFT = this.getTile(Math.floor(player.x / GRID_SIZE), gridY);

        const tileXUP = this.getTile(gridX, Math.floor(player.y / GRID_SIZE));
        const tileX = this.getTile(gridX, Math.floor(player.y / GRID_SIZE));
        const tileXDOWN = this.getTile(gridX, Math.floor(player.y / GRID_SIZE) + 2);

        if (player.vx != 0){
            if (tileXUP == "w" || tileXDOWN == "w"){
                player.x -= player.vx;
            } else {
                this.specialTiles(tileX,player);
            }
        }
        if (player.vy != 0){
            if (tileYRIGHT == "w" || tileYLEFT == "w"){
                player.y -= player.vy;
            } else {
                this.specialTiles(tileY,player);
            }
        }
    }
}