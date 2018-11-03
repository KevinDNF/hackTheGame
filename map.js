
class Map {
    constructor(layout) {
        this.layout = layout;
    }

    getTile(x, y) {
        return this.layout[y][x]
    }

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