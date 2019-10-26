const Cell = require('./cell');

class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.rows = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.rows.push(new Cell(x, y));
            }
        }
    }

    setObstacleAt(x, y) {
        this.cellAt(x, y).obstacle = true;
    }

    cellAt(x, y) {
        return this.rows[x + y * this.width];
    }

    neighbours(cell) {
        const neighbours = [];

        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (cell.x + x >= 0 && cell.x + x < this.width
                    && cell.y + y >= 0 && cell.y + y < this.height
                    && !(x == 0 && y == 0)) {
                    const neighbour = this.cellAt(cell.x + x, cell.y + y);
                    if (!neighbour.obstacle) {
                        neighbours.push(neighbour);
                    }
                }
            }
        }

        return neighbours;
    }

    log(cellRenderer) {
        let row = "   ";
        for (let x = 0; x < this.width; x++) {
            row += x.toString().padStart(3);
        }
        console.log(row);

        for (let y = 0; y < this.height; y++) {
            let row = y.toString().padStart(3);
            for (let x = 0; x < this.width; x++) {
                const cell = this.cellAt(x, y);
                row += cellRenderer(cell)
            }
            console.log(row);
        }
    }

}

module.exports = Board;
