const Cell = require('./cell');

test('Calculates distance to the other cell', () => {
    const cellFrom = new Cell(20, 20);
    const cellTo = new Cell(10, 10);

    expect(Math.round(cellFrom.distanceTo(cellTo) * 100) / 100).toBe(14.14);
});

test('By default is not obstacle', () => {
    expect(new Cell(0, 0).obstacle).toBe(false);
});
