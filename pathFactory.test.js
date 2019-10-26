const createPathFromMap = require('./pathFactory');

test('Path factory creates path from next to prev map in reverse order', () => {
    const nextToPrevMap = new Map();
    nextToPrevMap.set(5, 4);
    nextToPrevMap.set(4, 2);
    nextToPrevMap.set(2, 1);
    nextToPrevMap.set(1, 0);

    expect(createPathFromMap(nextToPrevMap, 5)).toEqual([1, 2, 4, 5]);
});
