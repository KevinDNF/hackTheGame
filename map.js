
/**
 * Data structure for the map itself
 * Handles getting a tile as well as collision detection
 */
class Map {
    constructor(layout) {
        this.layout = layout;
    }

    /**
     * Gets a tile at X, Y
     * @param {Number} x The X coordinate of a tile to get
     * @param {Number} y The Y coordinate of a tile to get
     */
    getTile(x, y) {
        return this.layout[y][x]
    }

    /**
     * Handles collision detection and response between the tile map 
     * and the player
     * @param {Player} player The player
     */
    collisions(player) {
        const playerNextX = player.x + player.vx;
        const playerNextY = player.y + player.vy;
        let gridX = Math.floor(playerNextX / GRID_SIZE);
        let gridY = Math.floor(playerNextY / GRID_SIZE);

        

        if (player.vx > 0) {
            gridX += 1;
        }
        if (player.vy > 0) {
            gridY += 1;
        }
        const tile = this.getTile(gridX, gridY);
        const tileY = this.getTile(Math.floor(player.x / GRID_SIZE), gridY);
        const tileX = this.getTile(gridX, Math.floor(player.y / GRID_SIZE));

        if (player.vx != 0 && tileX === "x"){
            player.x -= player.vx;
        }
        if (player.vy != 0 && tileY === "x"){
            player.y -= player.vy;
        }
    }
}