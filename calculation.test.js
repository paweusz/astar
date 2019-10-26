const Calculation = require('./calculation');
const Board = require('./board');

test('Calculates diagonal path', () => {
    const board = new Board(5, 5);
    const calc = new Calculation(board, board.cellAt(0, 0), board.cellAt(4, 4));

    expect(calc.calculate()).toEqual([
        board.cellAt(0, 0),
        board.cellAt(1, 1),
        board.cellAt(2, 2),
        board.cellAt(3, 3),
        board.cellAt(4, 4),
    ]);
});

test('Calculates complex path', () => {
    const board = new Board(8, 8);
    const calc = new Calculation(board, board.cellAt(6, 6), board.cellAt(1, 2));

    expect(calc.calculate()).toEqual([
        board.cellAt(6, 6),
        board.cellAt(5, 5),
        board.cellAt(4, 5),
        board.cellAt(3, 4),
        board.cellAt(2, 3),
        board.cellAt(1, 2),
    ]);
});

test('Bypasses obstacles', () => {
    const board = new Board(8, 8);
    for (let y = 1; y < 8; y++) {
        board.setObstacleAt(3, y);
    }

    const calculation = new Calculation(board, board.cellAt(6, 6), board.cellAt(1, 2));

    expect(calculation.calculate()).toEqual([
        board.cellAt(6, 6),
        board.cellAt(5, 5),
        board.cellAt(5, 4),
        board.cellAt(4, 3),
        board.cellAt(4, 2),
        board.cellAt(4, 1),
        board.cellAt(3, 0),
        board.cellAt(2, 1),
        board.cellAt(1, 2),
    ]);
});