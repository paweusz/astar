class Cell {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.obstacle = false;
    }

    distanceTo(cell) {
        return Math.sqrt(Math.abs(this.x - cell.x)**2 + Math.abs(this.y - cell.y)**2);
    }

}

module.exports = Cell;
