const Board = require('./board');
const Calculation = require('./calculation');

const board = new Board(8, 8);
for (let y = 1; y < 8; y++) {
    board.setObstacleAt(3, y);
}
for (let x = 3; x < 7; x++) {
    board.setObstacleAt(x, 3);
}

const calculation = new Calculation(board, board.cellAt(6, 6), board.cellAt(1, 2));
const path = calculation.calculate();

function cellRenderer(cell) {
    if (path.includes(cell)) {
        return "[#]";
    } else if (cell.obstacle) {
        return "[x]";
    } else {
        return "[ ]";
    }
};
board.log(cellRenderer);
