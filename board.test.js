const Cell = require('./cell');
const Board = require('./board');

test('Board returns its cells', () => {
    const board = new Board(10, 10);

    expect(board.cellAt(5, 5)).toEqual({ x: 5, y: 5, obstacle: false });
});

test('Board calculates neighbours for top left corner', () => {
    const board = new Board(10, 10);

    expect(board.neighbours(board.cellAt(0, 0))).toEqual([
        board.cellAt(1, 0),
        board.cellAt(0, 1),
        board.cellAt(1, 1)
    ]);
});

test('Board calculates neighbours in the middle', () => {
    const board = new Board(10, 10);

    expect(board.neighbours(board.cellAt(1, 1))).toEqual([
        board.cellAt(0, 0),
        board.cellAt(1, 0),
        board.cellAt(2, 0),
        board.cellAt(0, 1),
        board.cellAt(2, 1),
        board.cellAt(0, 2),
        board.cellAt(1, 2),
        board.cellAt(2, 2),
    ]);
});

test('Board calculates neighbours for bottom right corner', () => {
    const board = new Board(10, 10);

    expect(board.neighbours(board.cellAt(9, 9))).toEqual([
        board.cellAt(8, 8),
        board.cellAt(9, 8),
        board.cellAt(8, 9)
    ]);
});

test('If cell is obstacle it\s not being considered as neighbour', () => {
    const board = new Board(3, 3);
    board.setObstacleAt(0, 0);
    board.setObstacleAt(2, 2);

    expect(board.neighbours(board.cellAt(1, 1))).toEqual([
        board.cellAt(1, 0),
        board.cellAt(2, 0),
        board.cellAt(0, 1),
        board.cellAt(2, 1),
        board.cellAt(0, 2),
        board.cellAt(1, 2),
    ]);
});

test('Can set cell as obstacle', () => {
    const board = new Board(10, 10);

    board.setObstacleAt(0, 0);
    expect(board.cellAt(0, 0).obstacle).toBe(true);
});
