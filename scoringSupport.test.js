const itemWithLowestScore = require('./scoringSupport');

test('Finds item with lowest score', () => {
    const itemToScoreMap = new Map();

    itemToScoreMap.set(1, 5);
    itemToScoreMap.set(2, 5);
    itemToScoreMap.set(3, 3);
    itemToScoreMap.set(4, 1);
    itemToScoreMap.set(5, 2);

    expect(itemWithLowestScore([1, 2, 3, 4, 5], itemToScoreMap)).toBe(4);
});
